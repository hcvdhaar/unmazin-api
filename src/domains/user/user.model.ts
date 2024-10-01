export interface User {
  id: string;
  name: string;
  email: string;
  createAt: Date;
  updateAt?: Date;
  lastLogin?: Date;
}

export interface UserResponseDto {
  id: number;
  name: string | null;
  email: string;
}

export interface UserRequestCreateDto {
  name: string;
  email: string;
  password: string;
}

export interface UserRequestUpdateDto {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserDeleteDto {
  message: string;
}
