import { Test, TestingModule } from '@nestjs/testing';
import { CompanyFieldController } from './company-field.controller';

describe('CompanyFieldController', () => {
  let controller: CompanyFieldController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyFieldController],
    }).compile();

    controller = module.get<CompanyFieldController>(CompanyFieldController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
