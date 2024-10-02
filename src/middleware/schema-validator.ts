import { NextFunction, Response, Request } from 'express';
import { z } from 'zod';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

function composeErrorMessage(errors: z.ZodError): string {
  return errors.errors
    .map((error) => {
      return `${error.path[0].toString().toUpperCase()}: ${error.message.toLowerCase()}`;
    })
    .join(', ');
}

// TODO: make the error handling beter
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function schemaValidator(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        if (process.env.NODE_ENV === 'development') {
          console.log(error.errors);
        }

        const customError = {
          originalError: error,
          message: `Invalid input: ${composeErrorMessage(error)}`,
        };

        next(customError);
      }

      next({
        originalError: error,
        message: getReasonPhrase(StatusCodes.BAD_REQUEST),
      });
    }
  };
}
