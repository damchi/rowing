import {Column, Entity, ManyToOne} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {TypeExercices} from './typeExercices.entity';


@Entity()
export class Exercices extends HistoriqueEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => TypeExercices, typeExercices => typeExercices.exercices, {cascade: true})
    typeExercices: TypeExercices;
}
