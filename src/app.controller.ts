import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return req.user;
  }


  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Req() req) {
    return req.logout();
  }

}
