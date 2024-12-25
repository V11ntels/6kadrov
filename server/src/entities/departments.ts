import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('departments')
export class Department {
    @PrimaryGeneratedColumn()
    department_id: number;

    @Column('varchar', { length: 50 })
    department_name: string;

}
