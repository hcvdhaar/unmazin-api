export interface User {
  id: string;
  name: string;
  email: string;
  createAt: Date;
  updateAt?: Date;
  lastLogin?: Date;
}
