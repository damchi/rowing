import {Entity, Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';
import {Categories} from './categories.entity';

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

    @ManyToOne( () => Roles, (role: Roles) => role.name )
    role: Roles;
}
