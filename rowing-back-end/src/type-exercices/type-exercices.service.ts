import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeExercices} from '../entities/typeExercices.entity';

@Injectable()
export class TypeExercicesService {
    constructor( @InjectRepository(TypeExercices) private readonly typeExercicesRepository: Repository<TypeExercices> ) { }

    async findAll(): Promise<TypeExercices[]> {
        return await this.typeExercicesRepository.find({where: [{ deleteAt: null }],
        });
    }
    async save( typeExercice: TypeExercices): Promise<TypeExercices> {
        return this.typeExercicesRepository.save(typeExercice);
    }

}
