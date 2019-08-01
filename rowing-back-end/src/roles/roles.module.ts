import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Roles} from '../entities/roles.entity';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [TypeOrmModule.forFeature([Roles])],

})
export class RolesModule {}
