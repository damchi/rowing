import {Entity, Column, ManyToOne} from 'typeorm';
import {Roles} from './roles.entity';
import {HistoriqueEntity} from './historique.entity';

@Entity()
export class Users  extends HistoriqueEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    city: string;

    @Column()
    country: string;

    @ManyToOne(type => Roles, role => role.name )
    role: Roles;
}
