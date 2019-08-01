import { Module } from '@nestjs/common';
import { EntrainementsService } from './entrainements.service';
import { EntrainementsController } from './entrainements.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Entrainements} from '../entities/entrainements.entity';

@Module({
  providers: [EntrainementsService],
  controllers: [EntrainementsController],
  imports: [TypeOrmModule.forFeature([Entrainements])],

})
export class EntrainementsModule {}
