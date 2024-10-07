import { Request, Response } from 'express';
import primsa from '../db';
import { hashPassword } from './password';
import { createToken } from './token';
import { asyncHandler } from '../../utils/async-handler';
import { StatusCodes } from 'http-status-codes';

// Move logic to service
// TOOD: we need to add a custom status code for each expception. Now we can only sent 1 general
// passed to the asyncHandle. We need to add it to the Error class and use it in the Errohandler.
export const registerHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const user = await primsa.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    const createdUser = await primsa.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = createToken({
      id: createdUser.id.toString(),
      name: createdUser.name!,
      email: createdUser.email,
    });

    if (token === undefined) {
      return res.status(201).send({ token });
    } else {
      throw new Error('Could not create user');
    }
  },
  undefined,
  StatusCodes.CONFLICT
);
