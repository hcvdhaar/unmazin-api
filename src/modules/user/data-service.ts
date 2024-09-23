import prisma from '../../modules/db';

export class DataServiceRepository {
  static async getAll() {
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return allUsers;
  }

  static async getById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    return user;
  }

  static async create({ name, email }: { name: string; email: string }) {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return newUser;
  }

  static async update(id: string) {
    const updateUser = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        name: 'provide_some_name_here',
        email: 'add_some@email.com',
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
