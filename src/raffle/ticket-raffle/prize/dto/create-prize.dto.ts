import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreatePrizeDto {
  @IsString()
  @IsNotEmpty()
  prize_name: string;

  @IsInt()
  @Min(1)
  prize_quantity: number;
}
