import {Entity, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';
import {Categories} from './categories.entity';
import {Exercices} from './exercices.entity';
import {Season} from './season.entity';

@Entity()
export class Entrainements extends HistoriqueEntity {
    @Column()
    name: string;

    @ManyToMany( () => Categories )
    @JoinTable()
    category: Categories[];

    @Column()
    distance: number;

    @Column()
    start: number;

    @Column()
    comments: string;

    @Column()
    warmUp: string;

    @Column()
    cadence: string;

    @ManyToOne(type => Season, season => season.name)
    season: Season;

    @Column()
    rest: string;

    @ManyToOne(type => Roles, role => role.entrainements)
    role: Roles;

    @ManyToMany( () => Exercices )
    @JoinTable()
    exercices: Exercices[];
}
