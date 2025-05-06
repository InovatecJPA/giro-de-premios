import { Type } from 'class-transformer';
import {
  IsOptional,
  IsEnum,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Matches,
  ValidateNested,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Profiles } from '../../prisma/generated/prisma/client';
import { AuthLoginDto } from '../../auth/dto/auth-login.dto';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  @Matches(/^\d{11}$/, { message: 'CPF must have exactly 11 digits' })
  cpf: string;

  @IsPhoneNumber('BR', { message: 'Telefone Invalido' })
  number: string;

  @IsString()
  @IsOptional()
  @Matches(/(?:https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/)
  social_media?: string | null

  @IsOptional()
  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'comissão deve ser um número' }
  )
  @Min(0, { message: 'comissão mínima é 0.00' })
  @Max(1, { message: 'comissão máxima é 1.00' })
  comissao?: number

  @IsEnum(Profiles)
  profile: Profiles;

  @IsOptional()
  @IsUUID()
  owner_id?: string | null;

  @ValidateNested()
  @Type(() => AuthLoginDto)
  credentials: AuthLoginDto;
}
