import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@app/prisma/prisma.service';

@Injectable()
export class UserRepopository {
  constructor(private prisma: PrismaService) {}

  getAllUsers(): any {
    return this.prisma.user.findMany();
  }

  getUser(id: number): any {
    console.log('get me the user with id: ', id);

    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  createUser(data: any): any {
    return this.prisma.user.create({
      data: data,
    });
  }

  updateUser(id: number, data: Prisma.UserUpdateInput): any {
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

  deleteUser(id: number): any {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
