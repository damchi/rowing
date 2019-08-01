import { Test, TestingModule } from '@nestjs/testing';
import { EntrainementsController } from './entrainements.controller';

describe('Entrainements Controller', () => {
  let controller: EntrainementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrainementsController],
    }).compile();

    controller = module.get<EntrainementsController>(EntrainementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
