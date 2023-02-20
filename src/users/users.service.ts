import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];
  create(user: CreateUserDto) {
    this.users.push(user);
  }
  findAll() {
    return this.users;
  }
}
