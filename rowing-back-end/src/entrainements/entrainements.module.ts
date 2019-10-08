import { Module } from '@nestjs/common';
import { EntrainementsService } from './entrainements.service';
import { EntrainementsController } from './entrainements.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Entrainements} from '../entities/entrainements.entity';
import {ColorService} from '../color/color.service';
import {Color} from '../entities/color.entity';

@Module({
  providers: [EntrainementsService, ColorService],
  controllers: [EntrainementsController],
  imports: [TypeOrmModule.forFeature([Entrainements, Color])],

})
export class EntrainementsModule {}
