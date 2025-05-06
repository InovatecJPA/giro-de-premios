import { Decimal } from '@prisma/client/runtime/library';
import { Transform } from 'class-transformer';
import { IsDecimal, IsUUID } from 'class-validator';

export class ResponseWithDecimal {
    @IsUUID('4')
    id: string;

    @Transform(({ value }) => (value instanceof Decimal ? value.toString() : value), { toClassOnly: true })
    amount: string;
}

