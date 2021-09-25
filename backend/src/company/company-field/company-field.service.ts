import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyField } from './company-field.entity';

@Injectable()
export class CompanyFieldService {
  constructor(
    @InjectRepository(CompanyField) private repo: Repository<CompanyField>,
  ) {}

  create(name: string) {
    const companyField = this.repo.create({ name });
    return this.repo.save(companyField);
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  find() {
    return this.repo.find();
  }
}
