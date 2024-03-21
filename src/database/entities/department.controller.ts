import { Controller, Post, Get, Put, Delete, Body,Param } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { IDepartment } from '../interfaces/department.interface';

@Controller()
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('/department')
  async create(@Body() createDepartmentDto: IDepartment) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get('/department')
  async findAll() {
    return this.departmentService.findAll();
  }
 
  @Delete('department/:id')
  async deleteDepartment(@Param('id') id: string): Promise<void> {
    await this.departmentService.deleteDepartment(id);
  }

  @Put('department/:id')
  async updateDepartment( @Param('id') id: string, @Body() updateData: Partial<IDepartment>, ): Promise<void> {
    await this.departmentService.updateDepartment(id, updateData);
  }
}