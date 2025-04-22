import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class ResponseDiscountRuleDto {
  @Expose()
  id: string;

  @Expose()
  @Transform(({ value }) => value.toString())
  min_tickets: string;

  @Expose()
  @Transform(({ value }) => value.toString())
  discount_value: string;

  @Expose()
  raffle_edition_id: string;
}
