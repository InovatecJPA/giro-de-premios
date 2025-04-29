import { IsNumber, IsUUID, Min } from 'class-validator';

export class CreateWithdrawalRequestDTO {
    @IsUUID('4')
    user_id: string;

    @IsNumber()
    @Min(1)
    amount: number;

}
