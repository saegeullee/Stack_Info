import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { StackModule } from './stack/stack.module';

@Module({
  imports: [CompanyModule, StackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
