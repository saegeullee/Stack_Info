import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { StackModule } from './stack/stack.module';
import { CompanyField } from './company/company-field/company-field.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [CompanyField],
      synchronize: true,
    }),
    CompanyModule,
    StackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
