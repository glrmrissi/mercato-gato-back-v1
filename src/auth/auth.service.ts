import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/components/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<boolean> {
    const user = await this.usersService.findOne(email);
    return !!(user && user.user_password === pass);
  }
}
 