import { IsNumber, IsString } from 'class-validator';

export class createCompanyDto {
  @IsNumber()
  companyFieldId: number;

  @IsString()
  description: string;

  @IsString()
  websiteUrl: string;

  @IsString()
  logoImageUrl: string;
}
