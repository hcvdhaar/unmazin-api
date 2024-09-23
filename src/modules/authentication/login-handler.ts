import { Request, Response } from 'express';

export const loginHandler = (req: Request, res: Response) => {
  res.send('Hello from login handler');
};
