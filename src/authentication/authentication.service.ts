import { CreateUserDto } from '@app/user/dtos/create-user.dto';
import { UserService } from '@app/user/user.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { hash, compare } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { SignInUserDto } from './dtos/signin-user.dto';
import { AccessToken } from './types';

// TODO: needs to go to the config module when that is available
const JWT_SECRET = 'secret';
const SALT_ROUNDS = 5;

@Injectable()
export class AuthenticationService {
  constructor(private userService: UserService) {}

  async login({ password, email }: SignInUserDto): Promise<AccessToken> {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid: boolean = await this.comparePasswords(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const token: string = await this.generateToken(user);

    return this.generateAccessToken(token);
  }

  async register(userData: CreateUserDto): Promise<AccessToken> {
    const hashedPassword = await this.hashPassword(userData.password);

    const newUser = await this.userService.createUser({
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
    });

    if (!newUser) {
      throw new BadRequestException('Could not create user');
    }

    const token = await this.generateToken(newUser);

    return this.generateAccessToken(token);
  }

  private async hashPassword(password: string): Promise<string> {
    return hash(password, SALT_ROUNDS);
  }

  private async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  private async generateToken(user: User): Promise<string> {
    return jwt.sign(
      { id: user.id, userName: user.name, createdAt: new Date() },
      JWT_SECRET,
    );
  }

  private generateAccessToken(token): { access_token: string } {
    return { access_token: token };
  }
}
