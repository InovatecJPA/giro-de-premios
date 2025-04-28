
import { Module } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { ExtractController } from './extract.controller';
import UserModule from '../user.module';

@Module({
    imports: [UserModule],
    controllers: [ExtractController],
    providers: [ExtractService],
    exports: [],
})
export class ExtractModule { }
