import { Test, TestingModule } from '@nestjs/testing';
import { TypeExercicesService } from './type-exercices.service';

describe('TypeExercicesService', () => {
  let service: TypeExercicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeExercicesService],
    }).compile();

    service = module.get<TypeExercicesService>(TypeExercicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
