import { z } from 'zod';

export const bookmarkCreateSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  description: z.string(),
  image: z.string().optional(),
  type: z.string(),
});

export const bookmarkUpdateSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  description: z.string(),
  image: z.string().optional(),
  type: z.string(),
});
