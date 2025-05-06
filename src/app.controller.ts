import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Decimal } from '@prisma/client/runtime/library';
import { plainToInstance } from 'class-transformer';
import { ResponseWithDecimal } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('teste')
  getTeste() {
    const teste = {
      id: '1234567890',
      amount: new Decimal(10)
    }

    const response = plainToInstance(ResponseWithDecimal, teste)

    console.log(response)

    return response
  }
}
