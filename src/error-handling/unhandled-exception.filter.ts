import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(Error)
export class GlobalErrorFilter implements ExceptionFilter {
  constructor(private logger: Logger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const { path, method } = ctx.getRequest<Request>();

    this.logger.error({
      method,
      path,
      message: exception.message,
    });

    response
      .status(400)
      .json(
        new InternalServerErrorException(
          'An unexpected error occurred',
        ).getResponse(),
      );
  }
}
