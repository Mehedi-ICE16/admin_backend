import { department } from './department.entity';
import { team } from './team.entity';
import { role } from './role.entity';
import { employee } from './employee.entity';
import { employee_login } from './employee_login.entity';
import { employee_stats } from './employee_stats.entity';

export const departmentProviders = [
  {
    provide: 'DEPARTMENT_REPOSITORY',
    useValue: department,
  },
    {
      provide: 'TEAM_REPOSITORY',
      useValue: team,
    },
    {
      provide: 'ROLE_REPOSITORY',
      useValue: role,
    },
    {
      provide: 'EMPLOYEE_REPOSITORY',
      useValue: employee,
    },
    {
      provide: 'EMPLOYEE_LOGIN_REPOSITORY',
      useValue: employee_login,
    },
    {
      provide: 'EMPLOYEE_STATS_REPOSITORY',
      useValue: employee_stats,
    },
];