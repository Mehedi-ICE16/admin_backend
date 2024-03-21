import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
import { department } from './department.entity';
import { team } from './team.entity';
import { role } from './role.entity';
import { employee } from './employee.entity';
import { employee_login } from './employee_login.entity';
import { employee_stats } from './employee_stats.entity';
import { IDepartment } from '../interfaces/department.interface';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private departmentRepository: typeof department,
    @Inject('TEAM_REPOSITORY')
    private teamRepository: typeof team,
    @Inject('ROLE_REPOSITORY')
    private roleRepository: typeof role,
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: typeof employee,
    @Inject('EMPLOYEE_LOGIN_REPOSITORY')
    private employeeLoginRepository: typeof employee_login,
    @Inject('EMPLOYEE_STATS_REPOSITORY')
    private employeeStatsRepository: typeof employee_stats,
  ) {}

  async create(createDepartmentDto: IDepartment): Promise<department> {
    return this.departmentRepository.create<department>(createDepartmentDto);
  }
  async findAll(): Promise<department[]> {
    return this.departmentRepository.findAll<department>();
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.departmentRepository.destroy({ where: { id } });
  }

  async updateDepartment(id: string, updateData: Partial<IDepartment>): Promise<void> {
    await this.departmentRepository.update(updateData, { where: { id } });
  }
}