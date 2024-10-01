import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err.stack);
  res.status(500).send({ error: err.message });

  next();
}
