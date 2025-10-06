import { Injectable } from '@nestjs/common';
import { CreateRegisterCatDto } from './dto/create-register-cat.dto';
import { UpdateRegisterCatDto } from './dto/update-register-cat.dto';

@Injectable()
export class RegisterCatService {
  create(createRegisterCatDto: CreateRegisterCatDto) {
    return 'This action adds a new registerCat';
  }

  findAll() {
    return `This action returns all registerCat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registerCat`;
  }

  update(id: number, updateRegisterCatDto: UpdateRegisterCatDto) {
    return `This action updates a #${id} registerCat`;
  }

  remove(id: number) {
    return `This action removes a #${id} registerCat`;
  }
}
