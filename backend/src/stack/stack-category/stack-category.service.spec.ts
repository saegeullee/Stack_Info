import { Test, TestingModule } from '@nestjs/testing';
import { StackCategoryService } from './stack-category.service';

describe('StackCategoryService', () => {
  let service: StackCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StackCategoryService],
    }).compile();

    service = module.get<StackCategoryService>(StackCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
