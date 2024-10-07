import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

// TODO: We need a error handler that will catch all errors and send a response to the client in a consistent way
// TODO: we need to add a custom status code for each expception. Now we can only sent 1 general
interface CustomError extends Error {
  originalError: Error;
  statusCode: StatusCodes;
}

export function errorHandler(
  err: CustomError,
  _: Request,
  res: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === 'development') {
    console.log(err.originalError.stack);
  }

  res
    .status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ error: err.message });

  next();
}
