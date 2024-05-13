import { User } from './../../models/user.model';
import { DataServiceRepository } from './data';

export class UserService {
  static async getUser() {
    const userFromDB = await DataServiceRepository.get();
    return userFromDB;
  }
  static async getUserById(id: string) {
    const userFromDB = await DataServiceRepository.getById(id);
    return userFromDB;
  }
  static async createUser() {
    const userFromDB = await DataServiceRepository.create();
    return userFromDB;
  }
  static async updateUser(id: string) {
    const userFromDB = await DataServiceRepository.update(id);
    return userFromDB;
  }
  static async deleteUser(id: string) {
    const userFromDB = await DataServiceRepository.delete(id);
    return userFromDB;
  }
}
