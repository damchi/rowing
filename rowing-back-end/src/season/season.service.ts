import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Season} from '../entities/season.entity';
import {Repository} from 'typeorm';

@Injectable()
export class SeasonService {

    constructor( @InjectRepository(Season) private readonly  seasonRepository: Repository<Season>) {}
    async findAll(): Promise<Season[]> {
        return await this.seasonRepository.find({where: [{deleteAt: null}]});
    }
}
