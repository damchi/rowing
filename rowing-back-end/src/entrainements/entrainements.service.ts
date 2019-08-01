import { Injectable, Inject } from '@nestjs/common';
import {Entrainements} from '../entities/entrainements.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EntrainementsService {
    constructor( @InjectRepository(Entrainements) private readonly entrainementsRepository: Repository<Entrainements>) { }

    async findAll(): Promise<Entrainements[]> {
        return await this.entrainementsRepository.find({  relations: ['role', 'category'],
            where: [{ deleteAt: null }],
        });
    }
    //
    async save(training: Entrainements) {
        this.entrainementsRepository.save(training);
    }
    //
    // async deleteTraining(training: Entrainements) {
    //     this.entrainementsRepository.delete(training);
    // }

}
