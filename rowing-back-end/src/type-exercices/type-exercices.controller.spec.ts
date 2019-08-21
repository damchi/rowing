import { Test, TestingModule } from '@nestjs/testing';
import { TypeExercicesController } from './type-exercices.controller';

describe('TypeExercices Controller', () => {
  let controller: TypeExercicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeExercicesController],
    }).compile();

    controller = module.get<TypeExercicesController>(TypeExercicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
