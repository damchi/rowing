import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Roles} from './roles.entity';
import {Users} from './users.entity';
import {Exclude} from 'class-transformer';

@Entity()
export class HistoriqueEntity {
    @PrimaryGeneratedColumn()
    id: number;

   @Exclude() @Column({ type: 'date', name: 'deleteAt', nullable: true })
    public deleteAt?: Date | null;

    @Exclude() @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: string;

    // @ManyToOne(user => Users, users => users.email)
    // createdBy: Roles;
}
