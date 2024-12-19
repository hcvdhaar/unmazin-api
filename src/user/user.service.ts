import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepopository } from './user.repository';
import { Prisma, User } from '@prisma/client';
import { RESPONSE_VALUE } from '@app/settings';

// TODO: Add the error handling logic here?
@Injectable()
export class UserService {
  constructor(private userRepository: UserRepopository) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.getAllUsers();
  }

  getUser(id: number): Promise<User> {
    return this.userRepository.getUser(id);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.getUserByEmail(email);
  }

  async createUser({
    email,
    name,
    password,
  }: Omit<Prisma.UserCreateInput, 'createdAt'>): Promise<User> {
    const existingUser = await this.userRepository.getUserByEmail(email);

    if (existingUser) {
      throw new BadRequestException('Email already taken');
    }

    return await this.userRepository.createUser({ name, email, password });
  }

  async updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    const existingUser = await this.userRepository.getUser(id);

    if (!existingUser) {
      throw new BadRequestException('Could not update user. User not found');
    }

    return this.userRepository.updateUser(id, data);
  }

  async deleteUser(id: number): Promise<string> {
    const deletedUser = await this.userRepository.deleteUser(id);

    if (!deletedUser) {
      throw new BadRequestException('Could not delete user. User not found');
    }

    return RESPONSE_VALUE.OK;
  }
}
