import {Controller, Get} from '@nestjs/common';
import {TypeExercicesService} from './type-exercices.service';
import {classToPlain} from 'class-transformer';

@Controller('type-exercices')
export class TypeExercicesController {
    constructor(private service: TypeExercicesService) {}


    @Get()
    async findAll() {
            const typeExercicesEntities = await this.service.findAll();
            const typeExercicesPlain = classToPlain(typeExercicesEntities);
            return typeExercicesPlain;
        }

}
