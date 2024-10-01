import { Request, Response } from 'express';
import { UserService } from './service';
import { asyncHandler } from '../../utils/async-handler';

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const users = await UserService.getUsers();
  res.status(200).send(users);
}, 'Could not get users');

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.getUserById(req.params.id);
  res.send(user);
}, 'Could not get user by id');

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.createUser(req.body);
  res.json(user);
}, 'Could not create user');

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.updateUser({
    id: req.params.id,
    ...req.body,
  });
  res.send(user);
}, 'Could not update user');

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await UserService.deleteUser(req.params.id);
  res.send(user);
}, 'Could not delete user');
