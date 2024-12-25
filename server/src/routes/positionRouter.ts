import express from 'express';
import PositionController from '../controllers/positionsController.js';

const positionRouter = express.Router();

positionRouter.get('/', PositionController.getPositions);
positionRouter.post('/', PositionController.createPosition);
positionRouter.get('/:id', PositionController.getPositionById);
positionRouter.delete('/:id', PositionController.deletePosition);
positionRouter.put('/:id', PositionController.updatePositionById);

export default positionRouter;
