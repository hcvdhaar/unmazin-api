import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from '@app/user/dtos/create-user.dto';
import { SignInUserDto } from './dtos/signin-user.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('login')
  async login(@Body() userData: SignInUserDto) {
    const token = await this.authService.login(userData);

    return token;
  }

  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    const token = await this.authService.register(userData);
    return token;
  }

  @Post('forgot-password')
  forgotPassword() {
    return 'forgot-password';
  }
}
