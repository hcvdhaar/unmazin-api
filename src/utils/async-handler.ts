import { Request, Response, NextFunction, RequestHandler } from 'express';

export function asyncHandler(
  handler: RequestHandler,
  customErrorMessage?: string
) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(handler(req, res, next)).catch((e: Error) => {
      const customError = {
        originalError: e,
        message: customErrorMessage || 'Something went wrong',
      };
      next(customError);
    });
  };
}
