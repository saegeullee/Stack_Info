import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyFieldController } from './company-field/company-field.controller';
import { CompanyFieldService } from './company-field/company-field.service';

@Module({
  controllers: [CompanyController, CompanyFieldController],
  providers: [CompanyService, CompanyFieldService]
})
export class CompanyModule {}
