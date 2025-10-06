import { Test, TestingModule } from '@nestjs/testing';
import { RegisterCatController } from './register-cat.controller';
import { RegisterCatService } from './register-cat.service';

describe('RegisterCatController', () => {
  let controller: RegisterCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterCatController],
      providers: [RegisterCatService],
    }).compile();

    controller = module.get<RegisterCatController>(RegisterCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
