import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateDiscountRuleDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  min_tickets: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  discount_value: number;

  @IsUUID()
  raffle_edition_id: string;
}
