import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { employeeProvider } from './employee.provider';
import { DatabaseModule } from '../../database.module';
import { JwtMiddleware } from '../../jwt.middleware';
import { EmployeeLoginService } from '../employee_login/employee_login.service';
import { employeeLoginProvider } from '../employee_login/employee_login.provider';

@Module({
    imports: [DatabaseModule,JwtModule.register({ secret: 'my_secret_key', signOptions: { expiresIn: '12h' } })],
    controllers: [EmployeeController],
    providers: [
      EmployeeService,
      employeeProvider,
      JwtMiddleware,
      EmployeeLoginService,
      employeeLoginProvider
    ],
  })
  // export class EmployeeModule {}
  export class EmployeeModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(JwtMiddleware).forRoutes(EmployeeController);
    }
  }