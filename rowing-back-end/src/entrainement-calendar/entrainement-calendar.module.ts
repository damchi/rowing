import { Module } from '@nestjs/common';
import { EntrainementCalendarService } from './entrainement-calendar.service';
import { EntrainementCalendarController } from './entrainement-calendar.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {EntrainementCalendar} from '../entities/entrainementCalendar.entity';

@Module({
  providers: [EntrainementCalendarService],
  controllers: [EntrainementCalendarController],
  imports: [TypeOrmModule.forFeature([EntrainementCalendar])],

})
export class EntrainementCalendarModule {}
