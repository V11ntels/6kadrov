import { Request, Response } from 'express';

export type controllerFunction = (req: Request, res: Response) => void;
