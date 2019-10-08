import { Injectable } from '@nestjs/common';
import {Entrainements} from '../entities/entrainements.entity';
import {Repository, UpdateResult, DeleteResult} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntrainementsService {
    constructor( @InjectRepository(Entrainements) private readonly entrainementsRepository: Repository<Entrainements> ) { }

    async findAll(): Promise<Entrainements[]> {
        return await this.entrainementsRepository.find({  relations: ['role', 'category', 'exercices', 'season', 'color'],
            where: [{ deleteAt: null }],
        });
    }

    async save( training: Entrainements): Promise<Entrainements> {
        return this.entrainementsRepository.save(training);
    }

    async updateTraining(entrainement: Entrainements): Promise<UpdateResult> {
        return await this.entrainementsRepository.update(entrainement.id, entrainement);
    }

    async deleteTraining(training: Entrainements): Promise<DeleteResult> {
        return await this.entrainementsRepository.update(training.id, training);
    }

}
