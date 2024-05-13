export class DataServiceRepository {
  static async get() {
    return 'Some user';
  }

  static async getById(id: string) {
    return `User with id ${id}`;
  }

  static async create() {
    return 'User created';
  }

  static async update(id: string) {
    return `User with id ${id} updated`;
  }

  static async delete(id: string) {
    return `User with id ${id} deleted`;
  }
}
