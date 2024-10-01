import jwt from 'jsonwebtoken';

// TODO: add refresh token
export const createToken = (payload: Record<string, string>) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
