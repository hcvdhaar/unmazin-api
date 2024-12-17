// TODO: The User interface is also provided by Prisma. This might change since we are returning a serialized user object from the service.
// We should create a User interface in the user module to avoid any future issues.
export interface User {
  id: number;
  email: string;
  name: string;
}
