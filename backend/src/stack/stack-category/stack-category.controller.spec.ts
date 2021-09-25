import { Test, TestingModule } from '@nestjs/testing';
import { StackCategoryController } from './stack-category.controller';

describe('StackCategoryController', () => {
  let controller: StackCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StackCategoryController],
    }).compile();

    controller = module.get<StackCategoryController>(StackCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
