import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/users.dto';
import { UsersService } from './users.service';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() { username, email, user_password }: CreateUserDto) {
    return this.usersService.create({ username, email, user_password });
  }

  @Post('/login') 
  login(@Body() {email, user_password}: LoginDto) {
    return this.usersService.login({ email, user_password});
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

}
