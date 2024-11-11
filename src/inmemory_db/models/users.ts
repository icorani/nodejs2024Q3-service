import { IUser } from './interfaces';
import { InMemoryTable } from '../db_service';

export class User implements IUser {
  constructor(login: string, password: string, version: number) {
    this.login = login;
    this.password = password;
    this.version = version;
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }

  createdAt: number;
  id: string;
  login: string;
  password: string;
  updatedAt: number;
  version: number;
}

export const UsersTable = new InMemoryTable();
