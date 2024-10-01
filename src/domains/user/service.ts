import { DataServiceRepository } from './data-service';
import { UserRequestCreateDto, UserRequestUpdateDto } from './user.model';

export class UserService {
  static async getUsers() {
    const userFromDB = await DataServiceRepository.getAll();

    return userFromDB;
  }

  static async getUserById(id: string) {
    const userFromDB = await DataServiceRepository.getById(id);

    return userFromDB;
  }

  static async createUser(ctx: UserRequestCreateDto) {
    const userFromDB = await DataServiceRepository.create({
      ...ctx,
    });

    return userFromDB;
  }

  static async updateUser(ctx: UserRequestUpdateDto) {
    const userFromDB = await DataServiceRepository.update({
      ...ctx,
    });

    return userFromDB;
  }

  static async deleteUser(id: string) {
    const userFromDB = await DataServiceRepository.delete(id);

    return userFromDB;
  }
}
