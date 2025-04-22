import { IsBoolean, IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsUUID, ValidateIf } from 'class-validator';
import { AuthLoginDto } from './auth-login.dto';

export class AuthRegisterDto extends AuthLoginDto {
  @IsUUID('4')
  user_id: string
}
