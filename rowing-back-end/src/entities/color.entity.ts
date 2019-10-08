import {Entity, Column, ManyToOne, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';
import {Categories} from './categories.entity';
import {Exercices} from './exercices.entity';
import {Season} from './season.entity';
import {Entrainements} from './entrainements.entity';

@Entity()
export class Color extends HistoriqueEntity {
    @Column({nullable: true})
    primary: string;

    @Column({nullable: true})
    secondary: string;

    @OneToMany(type => Entrainements, entrainements => entrainements.id, {onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true})
    entrainements: Entrainements[];
}
