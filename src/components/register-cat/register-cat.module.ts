import { Module } from '@nestjs/common';
import { RegisterCatService } from './register-cat.service';
import { RegisterCatController } from './register-cat.controller';

@Module({
  controllers: [RegisterCatController],
  providers: [RegisterCatService],
})
export class RegisterCatModule {}
