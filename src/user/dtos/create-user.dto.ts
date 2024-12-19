import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
import { PASSWORD_CONFIG } from './settings';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword(PASSWORD_CONFIG)
  password: string;
}
