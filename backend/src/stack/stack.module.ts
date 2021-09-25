import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { StackCategoryController } from './stack-category/stack-category.controller';
import { StackCategoryService } from './stack-category/stack-category.service';

@Module({
  providers: [StackService, StackCategoryService],
  controllers: [StackController, StackCategoryController]
})
export class StackModule {}
