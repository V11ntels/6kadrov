import { plainToInstance } from 'class-transformer'; 
import EmployeeService from '../services/employeesService.js';
import { Request, Response } from 'express';
import { UpdateEmployeeDto } from '../dto/employee/UpdateEmployee.dto.js';
import { validate } from 'class-validator';
import { CreateEmployeeDto } from '../dto/employee/CreateEmployee.dto.js';

export default class EmployeeController {
    static async getEmployees(req: Request, res: Response): Promise<void> {
        const employees = await EmployeeService.getAllEmployees();
        res.json(employees);
    }

    static async searchEmployees(req: Request, res: Response): Promise<void> {
        const query = (req.query.q as string)?.toLowerCase() || '';
        const department = req.query.department;

        // Получаем всех сотрудников
        let employees = await EmployeeService.getAllEmployees();

        // Фильтрация по поисковому запросу (по имени)
        employees = employees.filter(employee =>
            employee.first_name.toLowerCase().includes(query) ||
            employee.last_name.toLowerCase().includes(query)
        );

        // Фильтрация по департаменту (если передан параметр)
        if (department) {
            const departmentId = Number(department); // Преобразуем строку в число
            employees = employees.filter(employee => employee.department_id === departmentId);
        }

        // Возвращаем отфильтрованных сотрудников
        res.json(employees);
    }

    static async getEmployeeById(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        const employee = await EmployeeService.getemployeeById(id);
        res.json(employee);
    }

    static async updateEmployeeById(req: Request, res: Response): Promise<void> {
        const employeeDto = plainToInstance(UpdateEmployeeDto, req.body);
        const errors = await validate(employeeDto);
        if (errors.length) {
            res.status(400).json(errors);
            return;
        }
        const id = Number(req.params.id);
        await EmployeeService.updateEmployeeById(id, employeeDto);
        res.send();
    }

    static async createEmployee(req: Request, res: Response): Promise<void> {
        const { department_id } = req.body;
        console.log(department_id);
        const employeeDto = plainToInstance(CreateEmployeeDto, req.body);
        const errors = await validate(employeeDto);
        if (errors.length) {
            res.status(400).json(errors);
            return;
        }
        await EmployeeService.createEmployee(employeeDto);
        res.send();
    }

    static async deleteEmployee(req: Request, res: Response): Promise<void> {
        const id = Number(req.params.id);
        await EmployeeService.deleteEmployee(id);
        res.send();
    }
}
