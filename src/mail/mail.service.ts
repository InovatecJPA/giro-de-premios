import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

export interface EmailContext {
    [key: string]: any
}

export interface EmailOptions {
    to: string
    subject: string
    template: string
    context: EmailContext
    cc?: string | string[];
    bcc?: string | string[];
    attachments?: Array<{
        filename: string;
        content: any;
        path?: string;
        contentType?: string;
    }>;
}

@Injectable()
export class MailService {
    private readonly logger = new Logger(MailService.name)
    private readonly isTest = process.env.NODE_ENV === 'test'

    constructor(
        private readonly mailerService: MailerService
    ) {
        this.isTest = process.env.NODE_ENV === 'test'
    }

    async sendMail(
        options: EmailOptions
    ) {
        try {
            if (this.isTest) {
                return this.logger.log(`Skipping email send in test environment - would send to ${options.to}`);
            }
            this.mailerService.sendMail({
                to: options.to,
                subject: options.subject,
                template: options.template,
                context: options.context || {},
                cc: options.cc,
                bcc: options.bcc,
                attachments: options.attachments,
            });

            this.logger.log(`Email sent to ${options.to}`)
        } catch (error) {
            this.logger.error(error)
        }
    }
}

