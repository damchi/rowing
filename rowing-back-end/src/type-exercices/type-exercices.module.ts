import { Module } from '@nestjs/common';
import { TypeExercicesService } from './type-exercices.service';
import { TypeExercicesController } from './type-exercices.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeExercices} from '../entities/typeExercices.entity';

@Module({
  providers: [TypeExercicesService],
  controllers: [TypeExercicesController],
  imports: [TypeOrmModule.forFeature([TypeExercices])],

})
export class TypeExercicesModule {}
