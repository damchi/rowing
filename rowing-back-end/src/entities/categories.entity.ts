import {Entity, Column} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';

@Entity()
export class Categories extends HistoriqueEntity {
    @Column()
    name: string;

}
