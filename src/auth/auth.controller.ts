import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // TODO: Add JWT authentication, implement refresh token mechanism and make work localauthguards
  @Post()
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get()
  async getAuth() {
    return { message: 'Auth route is working' };
  }
}
