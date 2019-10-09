import { Test, TestingModule } from '@nestjs/testing';
import { EntrainementCalendarController } from './entrainement-calendar.controller';

describe('EntrainementCalendar Controller', () => {
  let controller: EntrainementCalendarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntrainementCalendarController],
    }).compile();

    controller = module.get<EntrainementCalendarController>(EntrainementCalendarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
