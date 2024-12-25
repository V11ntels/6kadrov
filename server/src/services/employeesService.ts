import AppDataSource from '../config/database.js';
import { CreateEmployeeDto } from '../dto/employee/CreateEmployee.dto.js';
import { UpdateEmployeeDto } from '../dto/employee/UpdateEmployee.dto.js';
import {Employee } from '../entities/Employees.js';

const employeeRepo = AppDataSource.getRepository(Employee);

export default class EmployeeService {
    static async getAllEmployees() {
        const employees = await employeeRepo.find();

        return employees;
    }

    static async getemployeeById(id: number) {
        const employee = await employeeRepo.findOneBy({ employee_id: id });

        return employee;
    }

    static async updateEmployeeById(id: number, dataUpdate: UpdateEmployeeDto) {
        await employeeRepo.update({ employee_id: id }, dataUpdate);
    }

    static async createEmployee(dataEmployee: CreateEmployeeDto) {
        await employeeRepo.insert(dataEmployee);
    }

    static async deleteEmployee(id: number) {
        await employeeRepo.delete(id);
    }
}
