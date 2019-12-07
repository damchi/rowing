import {Entity, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';
import {Categories} from './categories.entity';
import {Exercices} from './exercices.entity';
import {Season} from './season.entity';
import {Color} from './color.entity';

@Entity()
export class Entrainements extends HistoriqueEntity {
    @Column({nullable: true})
    cadence: string;

    @ManyToMany( () => Categories, {cascade: true, eager: true} )
    @JoinTable()
    category: Categories[];

    @ManyToOne(type => Color, color => color.primary, {cascade: true,  eager: true})
    color: Color;

    @Column({nullable: true})
    comments: string;

    @Column({nullable: true})
    draggable: boolean;

    @Column()
    entrainement: string;

    @ManyToMany( () => Exercices, {cascade: true})
    @JoinTable()
    exercices: Exercices[];

    // @ManyToMany( () => Exercices, {eager: true})
    // @JoinTable()
    // exerciceDrill: Exercices[];
    //
    // @ManyToMany( () => Exercices,)
    // @JoinTable()
    // exerciceCore: Exercices[];
    //
    // @ManyToMany( () => Exercices)
    // @JoinTable()
    // exerciceMuscu: Exercices[];

    @Column()
    rest: string;

    @ManyToOne(type => Roles, role => role.entrainements, {cascade: true,  eager: true})
    role: Roles;

    @Column({nullable: true})
    strokesStart: number;

    @Column()
    title: string;

    @Column()
    warmUp: string;

    @ManyToOne(type => Season, season => season.name, {cascade: true,  eager: true})
    season: Season;

}
