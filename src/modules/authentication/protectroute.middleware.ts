import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface RequestWithUser extends Request {
  user: { id: string };
}

export function protectRoute(
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'No token provided' });
  }

  // // Get the bearer token
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return next(new Error('No token provided'));
  }

  // Verify the token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    return res.status(401).send({ error: 'Invalid token' });
  }

  // Add the user to the request object
  req.user.id = '1234';

  next();
}
