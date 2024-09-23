import { Request, Response } from 'express';
import primsa from '../db';
import { hashPassword } from './password';
import { createToken } from './token';

export const registerHandler = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  // TODO: add more validation
  // TODO: Check if email is valid

  // Check if all fields are provided
  for (const field of [name, email, password]) {
    if (!field) {
      return res.status(400).send('All fields are required');
    }
  }

  // Check if the user already exists
  const user = await primsa.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    res.status(400).send('User already exists');
    return;
  }

  const hashedPassword = await hashPassword(password);

  // Create the user
  try {
    const user = await primsa.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = createToken({
      id: user.id.toString(),
      name: user.name!,
      email: user.email,
    });

    res.status(201).send({ token });
  } catch (e) {
    console.error(e);
    return res.status(409).send('Could not create user');
  }
};
