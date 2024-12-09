import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.getUser(1);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createUser() {
    return this.userService.createUser();
  }

  @Put('/:id')
  updateUser() {
    return this.userService.updateUser(1);
  }

  @Delete('/:id')
  deleteUser() {
    return this.userService.deleteUser(1);
  }

  @Get('profile')
  getUserProfile() {
    return this.userService.getUserProfile();
  }
}
