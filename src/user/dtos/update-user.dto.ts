import {
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { PASSWORD_CONFIG } from './settings';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsStrongPassword(PASSWORD_CONFIG)
  @IsOptional()
  password: string;
}
