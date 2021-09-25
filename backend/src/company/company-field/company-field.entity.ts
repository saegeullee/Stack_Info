import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity()
export class CompanyField {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
