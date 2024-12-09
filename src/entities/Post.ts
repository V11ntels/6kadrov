import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn()
    post_id: number;

    @Column('varchar', { length: 255 })
    post_title: string;

    @Column('longtext')
    post_content: string;

    @Column()
    author_id: number;

    @Column()
    image_id: number;

    @Column('date')
    post_created: Date;
}
