import { z } from 'zod';

export const logingSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(process.env.PASSWORD_LENGTH),
});
