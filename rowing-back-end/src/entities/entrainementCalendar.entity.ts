import {Column, Entity} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {Entrainements} from './entrainements.entity';

@Entity()

export class EntrainementCalendar extends HistoriqueEntity {
    @Column()
    start: Date;
    @Column()
    end: Date;
    @Column()
    title: string;
    @Column()
    training: Entrainements;
    @Column()
    draggable: boolean;
    @Column('text')
    action: string;
}
