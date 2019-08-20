import {Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {Entrainements} from '../entities/entrainements.entity';
import {EntrainementsService} from './entrainements.service';
import {DeleteResult, UpdateResult} from 'typeorm';
import {classToPlain} from 'class-transformer';

@Controller('entrainements')
export class EntrainementsController {

    constructor( private  service: EntrainementsService) {}

    @Get()
    async findAll() {
        const trainingsEntities = await this.service.findAll();
        const trainingsPlain = classToPlain(trainingsEntities);
        return trainingsPlain;

    }

    @Post('create')
    create( @Body() training: Entrainements): Promise<Entrainements> {

        return this.service.save(training);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() entrainementsData: Entrainements): Promise<UpdateResult> {
        entrainementsData.id = Number(id);
        return this.service.updateTraining(entrainementsData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.service.deleteTraining(id);
    }

}
