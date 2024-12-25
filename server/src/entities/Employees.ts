import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    employee_id: number;

    @Column('varchar', { length: 50 })
    first_name: string;

    @Column('varchar', { length: 50 })
    last_name: string;

    @Column('varchar', { length: 50 })
    middle_name: string;

    @Column('date')
    birth_date: Date;

    @Column('date')
    hire_date: Date;

    @Column()
    position_id: number;

    @Column()
    department_id: number;

    @Column('varchar', { length: 20 })
    current_status: string;


}
