import { z } from 'zod';

export const userCreateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(process.env.PASSWORD_LENGTH),
  name: z.string(),
});

export const userUpdateSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(process.env.PASSWORD_LENGTH),
  name: z.string(),
});
