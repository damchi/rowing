import { Entity, Column } from 'typeorm';
import {HistoriqueEntity} from './historique.entity';

@Entity()
export class Roles extends HistoriqueEntity {

    @Column()
    name: string;
}
