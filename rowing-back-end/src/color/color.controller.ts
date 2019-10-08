import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ColorService} from './color.service';
import {Color} from '../entities/color.entity';
import {classToPlain} from 'class-transformer';

@Controller('color')
export class ColorController {
    constructor(private service: ColorService) {}

    @Get()
    async findAll() {
        const colorEntities = await this.service.findAll();
        const colorPlain = classToPlain(colorEntities);
        return colorPlain;
    }

    @Post('create')
    create( @Body() color: Color): Promise<Color> {
        return this.service.save(color);
    }
}
