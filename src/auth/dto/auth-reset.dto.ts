import { IsJWT, IsStrongPassword } from 'class-validator';

export class AuthResetDto {
  @IsStrongPassword({
    minLength: 4,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;

  @IsJWT()
  token: string;
}
