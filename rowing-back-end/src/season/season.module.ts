import { Module } from '@nestjs/common';
import { SeasonController } from './season.controller';
import { SeasonService } from './season.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Season} from '../entities/season.entity';

@Module({
    controllers: [SeasonController],
    providers: [SeasonService],
    imports: [TypeOrmModule.forFeature([Season])],
})
export class SeasonModule {}
