import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create_user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser({ username, password }: CreateUserDto) {
    const user = await this.usersService.findOne(username);
    const isValid = await bcrypt.compare(password, user.password); //パスワードの判断
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return isValid;
  }
  async login(user: CreateUserDto) {
    if (await this.validateUser(user)) {
      const payload = { username: user.username };
      return { acces_token: this.jwtService.sign(payload) };
    }
  }
}
