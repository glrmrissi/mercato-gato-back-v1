import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entities';
import { CreateUserDto } from './dto/users.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) { }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<Users | null> {
    return this.userRepository.findOne({ where: { username } });
  }

  async findById(id: number): Promise<Users | null> {
    if (id) {
      return this.userRepository.findOne({ where: { id } });
    } else {
      throw new BadRequestException("Este id não existe")
    }
  }

  async create({ username, email, user_password }: CreateUserDto): Promise<Users> {
    if (!username || !email || !user_password) {
      throw new BadRequestException("Campos obrigatórios ausentes");
    }

    const user = this.userRepository.create({ username, email, user_password });
    return await this.userRepository.save(user);
  }

  async login({ email, user_password }: LoginDto): Promise<boolean> {
    if (email && user_password) {
      const token = "Created token"
      return true
    } else {
      return false
    }
  }
}