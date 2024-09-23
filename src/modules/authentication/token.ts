import jwt from 'jsonwebtoken';

// TODO: add expiration time to token
// TODO: add refresh token
export const createToken = (payload: Record<string, string>) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
