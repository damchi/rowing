import {Column, Entity, JoinTable, ManyToOne} from 'typeorm';
import {HistoriqueEntity} from './historique.entity';
import {Entrainements} from './entrainements.entity';
import {ManyToMany} from 'typeorm/browser';

@Entity()

export class EntrainementCalendar extends HistoriqueEntity {
    @Column()
    start: Date;
    @Column({nullable: true})
    end: Date;
    @Column()
    title: string;

    @ManyToOne( type => Entrainements, training => training.id )
    @JoinTable()
    training: Entrainements;

    @Column()
    draggable: boolean;
    @Column('text')
    action: string;
}
