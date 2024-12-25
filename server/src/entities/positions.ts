import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('positions')
export class Position {
    @PrimaryGeneratedColumn()
    position_id: number;

    @Column('varchar', { length: 50 })
    position_name: string;

}
