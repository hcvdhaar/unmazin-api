import prisma from '../../modules/db';
import {
  UserRequestCreateDto,
  UserRequestUpdateDto,
  UserResponseDto,
} from './user.model';

export class DataServiceRepository {
  static async getAll(): Promise<UserResponseDto[] | null> {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return allUsers;
  }

  static async getById(id: string): Promise<UserResponseDto | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  static async create({
    name,
    email,
    password,
  }: UserRequestCreateDto): Promise<UserResponseDto | null> {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return newUser;
  }

  static async update({
    id,
    name,
    email,
    password,
  }: UserRequestUpdateDto): Promise<UserResponseDto | null> {
    const updateUser = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return updateUser;
  }

  static async delete(id: string) {
    await prisma.user.delete({
      where: {
        id: +id,
      },
    });

    return {
      message: 'User deleted successfully',
    };
  }
}
