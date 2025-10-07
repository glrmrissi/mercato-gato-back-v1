import { Test, TestingModule } from '@nestjs/testing';
import { RegisterCatService } from './register-cat.service';

describe('RegisterCatService', () => {
  let service: RegisterCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterCatService],
    }).compile();

    service = module.get<RegisterCatService>(RegisterCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
