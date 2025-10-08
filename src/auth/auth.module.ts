import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/components/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from 'src/components/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/components/users/entities/users.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
