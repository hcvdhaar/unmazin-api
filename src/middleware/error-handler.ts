import { Request, Response, NextFunction } from 'express';

// TODO: We need a error handler that will catch all errors and send a response to the client in a consistent way
interface CustomError extends Error {
  originalError: Error;
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

  res.status(500).send({ error: err.message });

  next();
}
