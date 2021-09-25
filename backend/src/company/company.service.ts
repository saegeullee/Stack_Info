import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CompanyField } from './company-field/company-field.entity';

import { CompanyInterface } from './company.interface';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company) private companyRepository: Repository<Company>,
    @InjectRepository(CompanyField)
    private companyFieldRepository: Repository<CompanyField>,
  ) {}

  async create({
    companyFieldId,
    description,
    websiteUrl,
    logoImageUrl,
  }: CompanyInterface) {
    const companyField = await this.companyFieldRepository.findOne(
      companyFieldId,
    );

    const company = this.companyRepository.create({
      company_field: companyField,
      description,
      website_url: websiteUrl,
      logo_image_url: logoImageUrl,
    });

    return this.companyRepository.save(company);
  }
}
