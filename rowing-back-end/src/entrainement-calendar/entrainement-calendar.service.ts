import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import {EntrainementCalendar} from '../entities/entrainementCalendar.entity';

@Injectable()
export class EntrainementCalendarService {
    private readonly logger = new Logger(EntrainementCalendarService.name);

    constructor( @InjectRepository(EntrainementCalendar) private readonly entrainementsCalendarRepository: Repository<EntrainementCalendar> ) { }

    async findAll(): Promise<EntrainementCalendar[]> {
        return await this.entrainementsCalendarRepository.find({
            relations: ['training', 'training.exercices', 'training.exercices.typeExercices'],
            where: [{ deleteAt: null }],
        });
    }

    async save( trainingCalendar: EntrainementCalendar): Promise<EntrainementCalendar> {
        return this.entrainementsCalendarRepository.save(trainingCalendar);
    }

    async updateTrainingCalendar(trainingCalendar: EntrainementCalendar): Promise<UpdateResult> {
        this.logger.log(trainingCalendar);

        return await this.entrainementsCalendarRepository.update(trainingCalendar.id, trainingCalendar);
    }

    async deleteTrainingCalendar(trainingCalendar: EntrainementCalendar): Promise<DeleteResult> {
        return await this.entrainementsCalendarRepository.update(trainingCalendar.id, trainingCalendar);
    }
}
