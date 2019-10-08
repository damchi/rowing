import { Module } from '@nestjs/common';
import { ColorController } from './color.controller';
import { ColorService } from './color.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Color} from '../entities/color.entity';

@Module({
  controllers: [ColorController],
  providers: [ColorService],
  imports: [TypeOrmModule.forFeature([Color])],

})
export class ColorModule {}
