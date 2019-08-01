import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import {CategoriesService} from './categories.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Categories} from '../entities/categories.entity';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [ TypeOrmModule.forFeature([Categories])],
})
export class CategoriesModule {}
