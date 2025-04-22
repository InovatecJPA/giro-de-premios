import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class ResponsePrizeDto {
  @Expose()
  id: string;

  @Expose()
  prize_name: string;

  @Expose()
  prize_quantity: number;
}
