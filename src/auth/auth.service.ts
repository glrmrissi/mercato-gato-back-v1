import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/components/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (!user) throw new UnauthorizedException('User not found');
    if (user.user_password !== pass) throw new UnauthorizedException('Wrong password');

    const { user_password, ...rest } = user; // remove password
    return rest;
  }

  async login(user: any) {
    return {
      message: 'Login successful',
      user,
    };
  }
}
