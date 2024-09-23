import { Request, Response } from 'express';
import primsa from '../db';

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await primsa.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (!user) {
    res.status(401).send('Invalid email or password');
    return;
  }

  res.send(user);
};
