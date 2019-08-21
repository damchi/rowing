import {Body, Controller, Get, Post} from '@nestjs/common';
import {classToPlain} from 'class-transformer';
import {ExercicesService} from './exercices.service';
import {Exercices} from '../entities/exercices.entity';

@Controller('exercices')
export class ExercicesController {
    constructor(private service: ExercicesService) {}

    @Get()
    async findAll() {
        const ExercicesEntities = await this.service.findAll();
        const exercicesPlain = classToPlain(ExercicesEntities);
        return exercicesPlain;
    }

    @Post('create')
    create( @Body() exercice: Exercices): Promise<Exercices> {
        return this.service.save(exercice);
    }
}
