import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Job, Queue } from "bull";
import { CreateTicketPaymentDto } from "../ticket-payment/dto/create-ticket-paymento.dto";
import { CreateTicketQueuePrizedDto } from "./dto/create-ticket-queue-prized.dto";



@Injectable()
export class TicketQueueService {
    constructor(
        @InjectQueue('ticket-purchase') private ticketPurchaseQueue: Queue
    ) { }

    async clearQueue() {
        await this.ticketPurchaseQueue.empty()
    }


    async queueTicketPurchase(data: CreateTicketPaymentDto) {
        const jobIdPrefix = `purchase-${Date.now()}-${data.cpf.substring(5)}`;

        const chunkSize = 1000;
        const jobs: Job<any>[] = [];

        if (data.ticket_amount > chunkSize) {
            const chunks = Math.ceil(data.ticket_amount / chunkSize);

            for (let i = 0; i < chunks; i++) {
                const chunkData = {
                    ...data,
                    ticket_amount: chunkSize
                };

                if (i === chunks - 1) {
                    chunkData.ticket_amount = data.ticket_amount - (chunkSize * i);
                }

                const jobId = `${jobIdPrefix}-${i + 1}`;

                const job = await this.ticketPurchaseQueue.add('buy-tickets', chunkData, {
                    jobId,
                    timeout: 30000,
                    removeOnComplete: true,
                    attempts: 3,
                    backoff: {
                        type: 'exponential',
                        delay: 2000
                    }
                });

                jobs.push(job);
            }
        } else {
            const jobId = `${jobIdPrefix}-1`;

            const job = await this.ticketPurchaseQueue.add('buy-tickets', data, {
                jobId,
                timeout: 30000,
                removeOnComplete: true,
                attempts: 3,
                backoff: {
                    type: 'exponential',
                    delay: 2000
                }
            });

            jobs.push(job);
        }

        return { jobIds: jobs.map(job => job.id), status: 'queued' };
    }

    async queueTicketPrize(data: CreateTicketQueuePrizedDto) {
        const jobIdPrefix = `prize-${Date.now()}-${data.raffle_edition_id.substring(5)}`;
        const chunkSize = 1000;
        const jobs: Job<any>[] = [];

        if (data.prizes && data.prizes.length > 0) {
            const totalQuantity = data.quantity;

            if (totalQuantity > chunkSize) {
                const chunks = Math.ceil(totalQuantity / chunkSize);

                const distributedPrizes = data.prizes.map(prize => ({
                    prize_id: prize.prize_id,
                    distributed: 0,
                    total: prize.quantity
                }));

                for (let i = 0; i < chunks; i++) {
                    const currentChunkSize = (i === chunks - 1)
                        ? totalQuantity - (chunkSize * i)
                        : chunkSize;

                    const chunkRatio = currentChunkSize / totalQuantity;

                    const chunkPrizes = data.prizes.map(prize => {
                        const prizeIndex = distributedPrizes.findIndex(p => p.prize_id === prize.prize_id);

                        let quantityForThisChunk;
                        if (i === chunks - 1) {
                            quantityForThisChunk = prize.quantity - distributedPrizes[prizeIndex].distributed;
                        } else {
                            quantityForThisChunk = Math.min(
                                Math.ceil(prize.quantity * chunkRatio),
                                prize.quantity - distributedPrizes[prizeIndex].distributed
                            );
                        }

                        distributedPrizes[prizeIndex].distributed += quantityForThisChunk;

                        return {
                            prize_id: prize.prize_id,
                            quantity: quantityForThisChunk
                        };
                    }).filter(prize => prize.quantity > 0);

                    const chunkData = {
                        ...data,
                        quantity: currentChunkSize,
                        prizes: chunkPrizes
                    };

                    const jobId = `${jobIdPrefix}-${i + 1}`;
                    const job = await this.ticketPurchaseQueue.add('add-prized-tickets', chunkData, {
                        jobId,
                        timeout: 30000,
                        removeOnComplete: true,
                        attempts: 3,
                        backoff: {
                            type: 'exponential',
                            delay: 2000
                        }
                    });
                    jobs.push(job);
                }
            } else {
                const jobId = `${jobIdPrefix}-1`;
                const job = await this.ticketPurchaseQueue.add('add-prized-tickets', data, {
                    jobId,
                    timeout: 30000,
                    removeOnComplete: true,
                    attempts: 3,
                    backoff: {
                        type: 'exponential',
                        delay: 2000
                    }
                });
                jobs.push(job);
            }
        } else {
            if (data.quantity > chunkSize) {
                const chunks = Math.ceil(data.quantity / chunkSize);
                for (let i = 0; i < chunks; i++) {
                    const chunkData = {
                        ...data,
                        quantity: i === chunks - 1 ? data.quantity - (chunkSize * i) : chunkSize
                    };

                    const jobId = `${jobIdPrefix}-${i + 1}`;
                    const job = await this.ticketPurchaseQueue.add('add-prized-tickets', chunkData, {
                        jobId,
                        timeout: 30000,
                        removeOnComplete: true,
                        attempts: 3,
                        backoff: {
                            type: 'exponential',
                            delay: 2000
                        }
                    });
                    jobs.push(job);
                }
            } else {
                const jobId = `${jobIdPrefix}-1`;
                const job = await this.ticketPurchaseQueue.add('add-prized-tickets', data, {
                    jobId,
                    timeout: 30000,
                    removeOnComplete: true,
                    attempts: 3,
                    backoff: {
                        type: 'exponential',
                        delay: 2000
                    }
                });
                jobs.push(job);
            }
        }

        return { jobIds: jobs.map(job => job.id), status: 'queued' };
    }

    async getJobStatus(jobId: string) {
        const job = await this.ticketPurchaseQueue.getJob(jobId)

        if (!job) return { status: 'not-found' }

        if (job.finishedOn) {
            return {
                status: 'completed',
                result: job.returnvalue
            }
        }
        return { status: job.failedReason ? 'failed' : 'processing' }
    }
}