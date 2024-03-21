import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { departmentProviders } from './department.providers';
import { DatabaseModule } from '../database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [DepartmentController],
    providers: [
      DepartmentService,
      ...departmentProviders,
    ],
  })
  export class DepartmentModule {}