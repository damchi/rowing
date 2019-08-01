import { Injectable } from '@nestjs/common';
import {Roles} from '../entities/roles.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';


@Injectable()
export class RolesService {

    constructor( @InjectRepository(Roles) private readonly  rolesRepository: Repository<Roles>){}
    async findAll(): Promise<Roles[]> {
        return await this.rolesRepository.find({where: [{deleteAt: null}]});
    }
}
