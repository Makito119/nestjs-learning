import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    UsersModule, //ユーザのfindone関数を使いたいから
    JwtModule.register({
      //jwt トークン
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], //providerを登録した瞬間に初期設定ができて、controllerとserviceに使える
})
export class AuthModule {}
