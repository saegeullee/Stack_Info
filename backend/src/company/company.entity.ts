import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { CompanyField } from './company-field/company-field.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => CompanyField)
  @JoinColumn()
  company_field: CompanyField;

  @Column()
  description: string;

  @Column()
  website_url: string;

  @Column()
  logo_image_url: string;
}
