import { DataServiceRepository } from './data-service';

// Add error handling here
// Do Schema Validation here

export class UserService {
  static async getUsers() {
    try {
      const userFromDB = await DataServiceRepository.getAll();
      return userFromDB;
    } catch (e) {
      return { error: 'Could not get users' };
    }
  }

  static async getUserById(id: string) {
    const userFromDB = await DataServiceRepository.getById(id);
    return userFromDB;
  }

  static async createUser({ name, email }: { name: string; email: string }) {
    try {
      const userFromDB = await DataServiceRepository.create({ name, email });
      return userFromDB;
    } catch (e) {
      return { error: 'Could not create user' };
    }
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
