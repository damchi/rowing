import { Test, TestingModule } from '@nestjs/testing';
import { EntrainementCalendarService } from './entrainement-calendar.service';

describe('EntrainementCalendarService', () => {
  let service: EntrainementCalendarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntrainementCalendarService],
    }).compile();

    service = module.get<EntrainementCalendarService>(EntrainementCalendarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
