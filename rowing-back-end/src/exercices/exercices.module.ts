import { Module } from '@nestjs/common';
import { ExercicesController } from './exercices.controller';
import { ExercicesService } from './exercices.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Exercices} from '../entities/exercices.entity';

@Module({
  controllers: [ExercicesController],
  providers: [ExercicesService],
  imports: [TypeOrmModule.forFeature([Exercices])],

})
export class ExercicesModule {}
