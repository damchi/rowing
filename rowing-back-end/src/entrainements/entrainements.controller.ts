import {Body, Controller, Delete, Get, Logger, Param, Post, Put, UseInterceptors} from '@nestjs/common';
import {Entrainements} from '../entities/entrainements.entity';
import {EntrainementsService} from './entrainements.service';
import {DeleteResult, UpdateResult} from 'typeorm';
import {classToPlain} from 'class-transformer';
import {ColorService} from '../color/color.service';

@Controller('entrainements')
export class EntrainementsController {
    private readonly logger = new Logger(EntrainementsController.name);


    constructor( private  service: EntrainementsService, private serviceColor: ColorService) {}

    @Get()
    async findAll() {
        const trainingsEntities = await this.service.findAll();
        const trainingsPlain = classToPlain(trainingsEntities);
        return trainingsPlain;

    }

    @Post('create')
    create( @Body() training: Entrainements): Promise<Entrainements> {
        training.draggable = true;
        // this.logger.log(training);

        return this.service.save(training);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() entrainementsData: Entrainements): Promise<UpdateResult> {
        entrainementsData.id = Number(id);
        return this.service.updateTraining(entrainementsData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id, @Body() entrainementsData: Entrainements): Promise<DeleteResult> {
        entrainementsData.id = Number(id);
        entrainementsData.deleteAt = new Date();
        return this.service.deleteTraining(entrainementsData);
    }

    // @Delete(':id/delete')
    // async delete(@Param('id') id): Promise<any> {
    //     return this.service.deleteTraining(id);
    // }

}
