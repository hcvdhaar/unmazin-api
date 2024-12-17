import { Injectable } from '@nestjs/common';
import { UserRepopository } from './user.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepopository) {}

  getAllUsers(): string {
    return this.userRepository.getAllUsers();
  }

  getUser(id: number): any {
    return this.userRepository.getUser(id);
  }

  createUser(data): any {
    return this.userRepository.createUser(data);
  }

  updateUser(id: number, data: Prisma.UserUpdateInput): string {
    return this.userRepository.updateUser(id, data);
  }

  deleteUser(id: number): string {
    return this.userRepository.deleteUser(id);
  }
}
