import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  description: string;

  @Column()
  title: string;
}
