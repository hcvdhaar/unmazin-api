import { createToken } from './token';
import { Request, Response } from 'express';
import primsa from '../db';
import { isPasswordValid } from './password';
import { asyncHandler } from '../../utils/async-handler';
import { StatusCodes } from 'http-status-codes';

// Move logic to service
export const loginHandler = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await primsa.user.findUnique({
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
      throw new Error('Unauthorized: User not found');
    }

    if (await isPasswordValid(password, user.password)) {
      const token = createToken({
        id: user.id.toString(),
        name: user.name!,
        email: user.email,
      });

      return res.send({ token });
    } else {
      throw new Error('Unauthorized: Password is incorrect');
    }
  },
  undefined,
  StatusCodes.UNAUTHORIZED
);
