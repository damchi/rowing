import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {EntrainementCalendarService} from './entrainement-calendar.service';
import {classToPlain} from 'class-transformer';
import {DeleteResult, UpdateResult} from 'typeorm';
import {EntrainementCalendar} from '../entities/entrainementCalendar.entity';

@Controller('entrainementCalendar')
export class EntrainementCalendarController {
    constructor( private  service: EntrainementCalendarService) {}

    @Get()
    async findAll() {
        const trainingsCalendarEntities = await this.service.findAll();
        const trainingsCalendarPlain = classToPlain(trainingsCalendarEntities);
        return trainingsCalendarPlain;

    }

    @Post('create')
    create( @Body() trainingCalendar: EntrainementCalendar): Promise<EntrainementCalendar> {
        trainingCalendar.draggable = true;
        return this.service.save(trainingCalendar);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() entrainementsCalendarData: EntrainementCalendar): Promise<UpdateResult> {
        entrainementsCalendarData.id = Number(id);
        return this.service.updateTrainingCalendar(entrainementsCalendarData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id, @Body() entrainementsCalendarData: EntrainementCalendar): Promise<DeleteResult> {
        entrainementsCalendarData.id = Number(id);
        entrainementsCalendarData.deleteAt = new Date();
        return this.service.deleteTrainingCalendar(entrainementsCalendarData);
    }

}
