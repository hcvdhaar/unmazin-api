import { Request, Response, NextFunction, RequestHandler } from 'express';

// TODO: we need to add a custom status code for each expception. Now we can only sent 1 general

export function asyncHandler(
  handler: RequestHandler,
  customErrorMessage?: string,
  statusCode = 500
) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(handler(req, res, next)).catch((e: Error) => {
      const customError = {
        originalError: e,
        message: customErrorMessage || e.message || 'Something went wrong',
        statusCode,
      };
      next(customError);
    });
  };
}
