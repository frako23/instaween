import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: false,
    nullable: false,
  })
  name: string;

  @Column('text', {
    unique: false,
    nullable: false,
  })
  lastname: string;

  @Column('text', {
    unique: true,
    nullable: false,
  })
  email: string;

  @Column('text', {
    unique: false,
  })
  password: string;

  @Column('text')
  gender: string;
}
