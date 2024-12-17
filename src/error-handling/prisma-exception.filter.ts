import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}

  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const messageForLogging = exception.message.replace(/\n/g, '');

    this.logger.error({
      message: messageForLogging,
      path: ctx.getRequest().path,
      method: ctx.getRequest().method,
      prismaCode: exception.code,
    });

    // TODO: Improve this mapping so the correct HTTP code is returned as well.
    // This now only returns a 400 status code
    let extractedMessage: string;
    switch (exception.code) {
      case 'P2002':
        extractedMessage = `Unique constraint failed`;
        break;
      case 'P2025':
        extractedMessage = 'Foreign key constraint failed';
        break;
      default:
        extractedMessage = 'Something went wrong';
    }

    response
      .status(HttpStatus.BAD_REQUEST)
      .json(new BadRequestException(extractedMessage).getResponse());
  }
}
