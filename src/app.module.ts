import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DepartmentModule } from './database/entities/department.module';

@Module({
  imports: [DatabaseModule, DepartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
