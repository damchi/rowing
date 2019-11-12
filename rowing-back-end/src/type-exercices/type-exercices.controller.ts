import {Body, Controller, Get, Post} from '@nestjs/common';
import {TypeExercicesService} from './type-exercices.service';
import {classToPlain} from 'class-transformer';
import {Exercices} from '../entities/exercices.entity';
import {TypeExercices} from '../entities/typeExercices.entity';

@Controller('type-exercices')
export class TypeExercicesController {
    constructor(private service: TypeExercicesService) {}


    @Get()
    async findAll() {
            const typeExercicesEntities = await this.service.findAll();
            const typeExercicesPlain = classToPlain(typeExercicesEntities);
            return typeExercicesPlain;
        }

    @Post('create')
    create( @Body() typeExercice: TypeExercices): Promise<TypeExercices> {
        return this.service.save(typeExercice);
    }
}
