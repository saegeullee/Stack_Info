import { Test, TestingModule } from '@nestjs/testing';
import { CompanyFieldService } from './company-field.service';

describe('CompanyFieldService', () => {
  let service: CompanyFieldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyFieldService],
    }).compile();

    service = module.get<CompanyFieldService>(CompanyFieldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
