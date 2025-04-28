import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Job, Queue } from "bull";
import { CreateTicketPaymentDto } from "../ticket-payment/dto/create-ticket-payment.dto";



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