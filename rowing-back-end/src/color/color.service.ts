import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Color} from '../entities/color.entity';

@Injectable()
export class ColorService {
    constructor( @InjectRepository(Color) private readonly colorRepository: Repository<Color> ) { }

    async findAll(): Promise<Color[]> {
        return await this.colorRepository.find({ where: [{ deleteAt: null }],
        });
    }

    async save( color: Color): Promise<Color> {
        return this.colorRepository.save(color);
    }

}
