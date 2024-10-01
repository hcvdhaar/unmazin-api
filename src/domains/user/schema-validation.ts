import zod from 'zod';

export const userSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  name: zod.string(),
});
