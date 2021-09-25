import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CompanyFieldService } from './company-field.service';
import { CreateCompanyFieldDto } from './dtos/create-company-field.dto';

@Controller('company-field')
export class CompanyFieldController {
  constructor(private companyFieldService: CompanyFieldService) {}

  @Get()
  async findCompayFields() {
    return await this.companyFieldService.find();
  }

  @Post()
  async createCompanyField(@Body() body: CreateCompanyFieldDto) {
    await this.companyFieldService.create(body.name);
  }

  @Get('/:id')
  async findCompanyField(@Param('id') id: string) {
    return await this.companyFieldService.findOne(parseInt(id));
  }
}
