import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
  create(createRegisterDto: any) {
    return 'This action adds a new register';
  }

  findAll() {
    return `This action returns all register`;
  }

  findOne(id: number) {
    return `This action returns a #${id} register`;
  }

  update(id: number, updateRegisterDto: any) {
    return `This action updates a #${id} register`;
  }

  remove(id: number) {
    return `This action removes a #${id} register`;
  }
}
