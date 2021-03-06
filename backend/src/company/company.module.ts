import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CompanyFieldController } from './company-field/company-field.controller';
import { CompanyFieldService } from './company-field/company-field.service';
import { CompanyField } from './company-field/company-field.entity';
import { Company } from './company.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CompanyField, Company])],
  controllers: [CompanyController, CompanyFieldController],
  providers: [CompanyService, CompanyFieldService],
})
export class CompanyModule {}
