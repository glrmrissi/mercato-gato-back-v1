import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterCatService } from './register-cat.service';
import { CreateRegisterCatDto } from './dto/create-register-cat.dto';
import { UpdateRegisterCatDto } from './dto/update-register-cat.dto';

@Controller('register-cat')
export class RegisterCatController {
  constructor(private readonly registerCatService: RegisterCatService) {}

  @Post()
  create(@Body() createRegisterCatDto: CreateRegisterCatDto) {
    return this.registerCatService.create(createRegisterCatDto);
  }

  @Get()
  findAll() {
    return this.registerCatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerCatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterCatDto: UpdateRegisterCatDto) {
    return this.registerCatService.update(+id, updateRegisterCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerCatService.remove(+id);
  }
}
