import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/components/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/components/users/entities/users.entities';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), PassportModule.register({ defaultStrategy: 'local' }), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
 