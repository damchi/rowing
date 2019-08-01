import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class HistoriqueEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date', name: 'deleteAt', nullable: true })
    public deleteAt?: Date | null;
}
