import {Entity, Column, OneToMany} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {Entrainements} from './entrainements.entity';

@Entity()
export class Roles extends HistoriqueEntity {

    @Column()
    name: string;

    @OneToMany(type => Entrainements, entrainements => entrainements.id)
    entrainements: Entrainements[];

}
