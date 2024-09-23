import { Request, Response } from 'express';

export const registerHandler = (req: Request, res: Response) => {
  res.send('Hello from register handler');
};
