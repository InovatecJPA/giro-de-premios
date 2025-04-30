import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: "sandbox.smtp.mailtrap.io",
                auth: {
                    user: "14d7d5e1f7a3ec",
                    pass: "f4cd04ce908391",
                },
            },
            defaults: {
                from: '"No Reply" <no-reply@example.com>',
            },
            template: {
                dir: join(__dirname, 'templates'),
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    controllers: [MailController],
    providers: [MailService],
    exports: [],
})
export class MailModule { }
