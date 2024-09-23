import { createToken } from './token';
import { Request, Response } from 'express';
import primsa from '../db';
import { isPasswordValid } from './password';

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  let user;

  try {
    user = await primsa.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user) {
      res.status(401).send({ message: 'Unauthorized' });
      return;
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal server error');
    return;
  }

  if (await isPasswordValid(password, user.password)) {
    const token = createToken({
      id: user.id.toString(),
      name: user.name!,
      email: user.email,
    });

    return res.send({ token });
  }

  res.status(401).send({ message: 'Unauthorized' });
};
