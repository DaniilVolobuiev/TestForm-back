import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'formData' })
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
