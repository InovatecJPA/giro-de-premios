import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, ValidateIf } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  provider: string;

  @IsString()
  @IsNotEmpty()
  @ValidateIf(obj => obj.provider === 'email')
  @IsEmail()
  provider_user_id: string;


  @ValidateIf(obj => obj.provider === 'email')
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;
}
