import express from 'express';
import DepartmentController from '../controllers/departmentController.js';

const departmentRouter = express.Router();

departmentRouter.get('/', DepartmentController.getDepartments);
departmentRouter.post('/', DepartmentController.createDepartment);
departmentRouter.get('/:id', DepartmentController.getDepartmentById);
departmentRouter.delete('/:id', DepartmentController.deleteDepartment);
departmentRouter.put('/:id', DepartmentController.updateDepartmentById);

export default departmentRouter;
