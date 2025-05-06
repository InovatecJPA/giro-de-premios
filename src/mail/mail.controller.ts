import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('test-email')
export class MailController {
    constructor(private readonly mailService: MailService) { }

    @Get()
    testEmail() {
        this.mailService.sendMail({
            to: 'pollyasr.dev@gmail.com',
            subject: 'Bem-vindo!',
            template: 'welcome',
            context: {
                name: 'João',
            },
        });

        return { message: 'E-mail enviado com sucesso!' };
    }
}
