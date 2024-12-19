import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepopository } from './user.repository';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [UserService, UserRepopository],
  exports: [UserService],
})
export class UserModule {}
