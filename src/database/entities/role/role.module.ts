import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { roleProvider } from './role.provider';
import { DatabaseModule } from '../../database.module';
import { JwtMiddleware } from '../../jwt.middleware';
import { EmployeeLoginService } from '../employee_login/employee_login.service';
import { employeeLoginProvider } from '../employee_login/employee_login.provider';

@Module({
    imports: [DatabaseModule,JwtModule.register({ secret: 'my_secret_key', signOptions: { expiresIn: '12h' } })],
    controllers: [RoleController],
    providers: [
      RoleService,
      roleProvider,
      JwtMiddleware,
      EmployeeLoginService,
      employeeLoginProvider
    ],
  })
  export class RoleModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(JwtMiddleware).forRoutes(RoleController);
    }
  }