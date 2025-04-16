import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsStrongPassword } from 'class-validator';

@Exclude()
export class AuthLoginDto {
  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsStrongPassword({
    minLength: 4,
    minLowercase: 0,
    minUppercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;
}
