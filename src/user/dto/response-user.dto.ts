import { Exclude, Expose, Transform } from "class-transformer";
import { IsDecimal } from "class-validator";
import { IsBigInt } from "../../decorator/bigint-validator.decorator";
import { Decimal } from "@prisma/client/runtime/library";
import { Profiles } from "@prisma/client";

@Exclude()
export class ResponseUserDTO {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  cpf: string;

  @Expose()
  email: string;

  @Expose()
  number: string;

  @Expose()
  social_media: string | null;

  @Expose()
  @IsBigInt()
  @Transform(({ value }) => (value.toString()))
  saldo: bigint;

  @Expose()
  comissao: Decimal;

  @Expose()
  profile: Profiles;

  @Expose()
  owner_id: string | null;

  hashed_password: string;
}