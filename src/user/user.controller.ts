import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Put('/:id')
  updateUser(
    @Body() data: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updateUser(id, data);
  }

  @Delete('/:id')
  deleteUser() {
    return this.userService.deleteUser(1);
  }
}
