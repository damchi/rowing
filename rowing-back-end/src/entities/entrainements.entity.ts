import {Entity, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';
import {Categories} from './categories.entity';
import {Exercices} from './exercices.entity';
import {Season} from './season.entity';
import {Color} from './color.entity';

@Entity()
export class Entrainements extends HistoriqueEntity {
    @Column()
    title: string;

    @ManyToMany( () => Categories )
    @JoinTable()
    category: Categories[];

    @Column()
    entrainement: string;

    @Column({nullable: true})
    strokesStart: number;

    @Column({nullable: true})
    comments: string;

    @Column()
    warmUp: string;

    @Column({nullable: true})
    cadence: string;

    @ManyToOne(type => Season, season => season.name)
    season: Season;

    @Column()
    rest: string;

    @ManyToOne(type => Color, color => color.primary, {cascade: true})
    color: Color;

    @Column({nullable: true})
    start: Date;

    @Column({nullable: true})
    end: Date;

    @Column({nullable: true})
    draggable: boolean;

    @ManyToOne(type => Roles, role => role.entrainements)
    role: Roles;

    @ManyToMany( () => Exercices, {cascade: true} )
    @JoinTable()
    exerciceDrill: Exercices[];

    @ManyToMany( () => Exercices, {cascade: true} )
    @JoinTable()
    exerciceCore: Exercices[];

    @ManyToMany( () => Exercices, {cascade: true} )
    @JoinTable()
    exerciceMuscu: Exercices[];

}
