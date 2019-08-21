import {Column, Entity, OneToMany} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {Exercices} from './exercices.entity';

@Entity()
export class TypeExercices extends HistoriqueEntity {
    @Column()
    name: string;

    @OneToMany(type => Exercices, exercices => exercices.id)
    exercices: Exercices[];

}
