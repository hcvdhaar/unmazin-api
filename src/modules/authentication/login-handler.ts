import { createToken } from './token';
import { Request, Response } from 'express';
import primsa from '../db';
import { isPasswordValid } from './password';

// Move logic to service
// Make it use the global error handler.
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
  } catch (e) {
    console.error(e);

    return res.status(500).send('Internal server error');
  }

  if (!user) {
    return res.status(401).send({ message: 'Unauthorized' });
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
