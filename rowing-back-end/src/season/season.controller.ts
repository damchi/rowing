import {Controller, Get} from '@nestjs/common';
import {SeasonService} from './season.service';

@Controller('season')
export class SeasonController {
    constructor( private service: SeasonService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }
}
