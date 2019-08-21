import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Exercices} from '../entities/exercices.entity';

@Injectable()
export class ExercicesService {
    constructor( @InjectRepository(Exercices) private readonly exercicesRepository: Repository<Exercices> ) { }

    async findAll(): Promise<Exercices[]> {
        return await this.exercicesRepository.find({ relations: [ 'typeExercices'], where: [{ deleteAt: null }],
        });
    }

    async save( exercice: Exercices): Promise<Exercices> {
        return this.exercicesRepository.save(exercice);
    }

}
