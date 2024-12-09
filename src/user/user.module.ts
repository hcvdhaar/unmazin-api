import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepopository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepopository],
})
export class UserModule {}
