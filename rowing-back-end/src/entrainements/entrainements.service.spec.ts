import { Test, TestingModule } from '@nestjs/testing';
import { EntrainementsService } from './entrainements.service';

describe('EntrainementsService', () => {
  let service: EntrainementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrainementsService],
    }).compile();

    service = module.get<EntrainementsService>(EntrainementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
