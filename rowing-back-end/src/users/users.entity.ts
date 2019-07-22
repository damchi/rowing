import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Roles} from "../roles/roles.entity";


@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

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

    @ManyToOne(type => Roles )
    role: Roles;
}
