
import { Module } from '@nestjs/common';
import { ExtractService } from './extract.service';
import { ExtractController } from './extract.controller';

@Module({
    imports: [],
    controllers: [ExtractController],
    providers: [ExtractService],
    exports: [],
})
export class ExtractModule { }
