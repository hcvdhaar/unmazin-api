import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUser extends Request {
  userId: string;
}

export interface JWTToken {
  id: string;
  name: string;
  email: string;
  iat: number;
}

export function protectRoute(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'No token provided' });
  }

  // // Get the bearer token
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return next(new Error('No token provided'));
  }

  // Verify the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET) as JWTToken;

  if (!decoded) {
    return res.status(401).send({ error: 'Invalid token' });
  }

  // Set the userId in the request object
  (req as RequestWithUser).userId = decoded.id;

  next();
}
