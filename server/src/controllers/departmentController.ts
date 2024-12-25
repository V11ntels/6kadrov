import { plainToInstance } from 'class-transformer';
import departmentService from '../services/departmentsService.js';
import { controllerFunction } from '../types/share.js';
import { UpdateDepartmentDto } from '../dto/department/UpdateDepartment.dto.js';
import { validate } from 'class-validator';
import { CreateDepartmentDto } from '../dto/department/CreateDepartment.dto.js';

export default class DepartmentController {
    static getDepartments: controllerFunction = async (req, res) => {
        const departments = await departmentService.getAllDepartments();
        res.json(departments);
    };

    static getDepartmentById: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);
        const department = await departmentService.getDepartmentById(id);
        res.json(department);
    };

    static updateDepartmentById: controllerFunction = async (req, res) => {
        const departmentDto = plainToInstance(UpdateDepartmentDto, req.body);

        const errors = await validate(departmentDto);
        if (errors.length) return res.status(400).json(errors);

        const id = Number(req.params.id);
        await departmentService.updateDepartmentById(id, departmentDto);
        res.send();
    };

    static createDepartment: controllerFunction = async (req, res) => {
        const departmentDto = plainToInstance(CreateDepartmentDto, req.body);

        const errors = await validate(departmentDto);
        if (errors.length) return res.status(400).json(errors);

        await departmentService.createDepartment(departmentDto);
        res.send();
    };

    static deleteDepartment: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);

        await departmentService.deleteDepartment(id);
        res.send();
    };
}
