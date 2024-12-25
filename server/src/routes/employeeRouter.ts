import express from 'express';
import EmployeeController from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.get('/', EmployeeController.getEmployees);
employeeRouter.get('/search', EmployeeController.searchEmployees);
employeeRouter.post('/', EmployeeController.createEmployee);
employeeRouter.get('/:id', EmployeeController.getEmployeeById);
employeeRouter.delete('/:id', EmployeeController.deleteEmployee);
employeeRouter.put('/:id', EmployeeController.updateEmployeeById);

export default employeeRouter;
