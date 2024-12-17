import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '@app/prisma/prisma.service';

@Injectable()
export class UserRepopository {
  constructor(private prisma: PrismaService) {}

  getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  createUser(data: any): Promise<User> {
    return this.prisma.user.create({
      data: data,
    });
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  updateUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    // TODO: Check if the user exists

    // TODO: Check if the user is trying to update the email
    // If the user is trying to update the email, check if the email is already taken
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data,
    });
  }

  deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
