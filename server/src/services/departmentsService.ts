import AppDataSource from '../config/database.js';
import { CreateDepartmentDto } from '../dto/department/CreateDepartment.dto.js';
import { UpdateDepartmentDto } from '../dto/department/UpdateDepartment.dto.js';
import {Department  } from '../entities/departments.js';

const departmentRepo = AppDataSource.getRepository(Department);

export default class DepartmentService {
    static async getAllDepartments() {
        const departments = await departmentRepo.find();

        return departments;
    }

    static async getDepartmentById(id: number) {
        const department = await departmentRepo.findOneBy({ department_id: id });

        return department;
    }

    static async updateDepartmentById(id: number, dataUpdate: UpdateDepartmentDto) {
        await departmentRepo.update({ department_id: id }, dataUpdate);
    }

    static async createDepartment(dataDepartment: CreateDepartmentDto) {
        await departmentRepo.insert(dataDepartment);
    }

    static async deleteDepartment(id: number) {
        await departmentRepo.delete(id);
    }
}
