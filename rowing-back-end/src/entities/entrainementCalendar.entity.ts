import {Column, Entity, JoinTable, ManyToOne, Timestamp} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {Entrainements} from './entrainements.entity';

@Entity()

export class EntrainementCalendar extends HistoriqueEntity {
    @Column()
    dayStart: Date;
    @Column()
    start: Date;
    @Column()
    end: Date;
    @Column()
    title: string;
    @ManyToOne( type => Entrainements, training => training.id, {cascade: true})
    training: Entrainements;
    @Column()
    draggable: boolean;
}
