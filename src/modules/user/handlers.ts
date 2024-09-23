import { Request, Response } from 'express';
import { UserService } from './service';

/**
 * Handlers only handle the request and response.
 * Authentication and validation should be done before calling the handler.
 * Business logic should be in the service layer.
 * Data access should be in the data layer.
 */

export const getUser = async (req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.status(200).send(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  res.send(user);
};

export const createUser = async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const user = await UserService.updateUser(req.params.id);
  res.send(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const user = await UserService.deleteUser(req.params.id);
  res.send(user);
};
