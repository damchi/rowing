import {Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Entrainements} from '../entities/entrainements.entity';
import {EntrainementsService} from './entrainements.service';

@Controller('entrainements')
export class EntrainementsController {

    constructor( private  service: EntrainementsService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    //
    @Post()
    create( training: Entrainements) {
        return this.service.save(training);
    }
    //
    // @Put()
    // update( training: Entrainements) {
    //     return this.service.updateTraining(training);
    // }
    //
    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.service.deleteTraining(params.id);
    // }

}
