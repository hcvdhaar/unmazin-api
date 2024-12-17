import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './error-handling/http-exception.filter';
import { GlobalErrorFilter } from './error-handling/unhandled-exception.filter';
import { PrismaExceptionFilter } from './error-handling/prisma-exception.filter';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
    // NOTE: Order matters here. The most specific filter should be last
    {
      provide: APP_FILTER,
      useClass: GlobalErrorFilter,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionFilter,
    },
  ],
})
export class AppModule {}
