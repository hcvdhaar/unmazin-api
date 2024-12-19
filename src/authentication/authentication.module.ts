import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AuthenticationController } from './authentication.controller';
import { UserModule } from '@app/user/user.module';

@Module({
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
  imports: [UserModule],
})
export class AuthenticationModule {}
