import { Body, Controller, Post } from '@nestjs/common';
import { createCompanyDto } from './dtos/create-company.dto';
import { CompanyService } from './company.service';
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post()
  async createCompany(@Body() body: createCompanyDto) {
    const { companyFieldId, description, websiteUrl, logoImageUrl } = body;

    return await this.companyService.create({
      companyFieldId,
      description,
      websiteUrl,
      logoImageUrl,
    });
  }
}
