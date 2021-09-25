import { IsString } from 'class-validator';

export class CreateCompanyFieldDto {
  @IsString()
  name: string;
}
