import { Sequelize } from 'sequelize-typescript';
import { department } from './entities/department/department.model';
import { team } from './entities/team/team.model';
import { role } from './entities/role/role.model';
import { employee } from './entities/employee/employee.model';
import { employee_login } from './entities/employee_login/employee_login.model';
import { employee_stats } from './entities/employee_stats/employee_stats.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'bsc16190',
        database: 'admin',
      });
      sequelize.addModels([
        department,
        team,
        role,
        employee,
        employee_login,
        employee_stats,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
