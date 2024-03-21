import { Sequelize } from 'sequelize-typescript';
import { department } from './entities/department.entity';
import { team } from './entities/team.entity';
import { role } from './entities/role.entity';
import { employee } from './entities/employee.entity';
import { employee_login } from './entities/employee_login.entity';
import { employee_stats } from './entities/employee_stats.entity';

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
