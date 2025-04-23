import { Exclude, Expose, Transform } from 'class-transformer';
import { IsBigInt } from '../../decorators/bigint-validator.decorator';
import { Profiles } from '../../prisma/generated/prisma/client';

@Exclude()
export class ResponseUserDTO {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  cpf: string;

  @Expose()
  number: string;

  @Expose()
  social_media: string | null;

  @Expose()
  @Transform(({ value }) => value.toString())
  saldo: string;

  @Expose()
  @Transform(({ value }) => value.toString())
  comissao: string;

  @Expose()
  profile: Profiles;

  @Expose()
  owner_id: string | null;
}
