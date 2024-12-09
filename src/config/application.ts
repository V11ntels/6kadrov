import express, { json } from 'express';
import cors from 'cors';
import postRouter from '../routes/postRouter.js';

const app = express();

app.use(cors());

app.use(json());

app.use('/posts', postRouter);

export default app;
