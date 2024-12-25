import express, { json } from 'express';
import cors from 'cors';
import employeeRouter from '../routes/employeeRouter.js';
import departmentRouter from '../routes/departmentRouter.js';
import positionRouter from '../routes/positionRouter.js';

const app = express();

app.use(cors());

app.use(json());

app.use('/employees', employeeRouter);
app.use('/departments', departmentRouter);
app.use('/positions', positionRouter);

export default app;
