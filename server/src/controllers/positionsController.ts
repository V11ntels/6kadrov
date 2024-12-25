import { plainToInstance } from 'class-transformer';
import PositionService from '../services/positionsService.js';
import { controllerFunction } from '../types/share.js';
import { UpdatePositionDto } from '../dto/position/UpdatePosition.dto.js';
import { validate } from 'class-validator';
import { CreatePositionDto } from '../dto/position/CreatePosition.dto.js';

export default class PositionController {
    static getPositions: controllerFunction = async (req, res) => {
        const positions = await PositionService.getAllPositions();
        res.json(positions);
    };

    static getPositionById: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);
        const position = await PositionService.getPositionById(id);
        res.json(position);
    };

    static updatePositionById: controllerFunction = async (req, res) => {
        const positionDto = plainToInstance(UpdatePositionDto, req.body);

        const errors = await validate(positionDto);
        if (errors.length) return res.status(400).json(errors);

        const id = Number(req.params.id);
        await PositionService.updatePositionById(id, positionDto);
        res.send();
    };

    static createPosition: controllerFunction = async (req, res) => {
        const positionDto = plainToInstance(CreatePositionDto, req.body);

        const errors = await validate(positionDto);
        if (errors.length) return res.status(400).json(errors);

        await PositionService.createPosition(positionDto);
        res.send();
    };

    static deletePosition: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);

        await PositionService.deletePosition(id);
        res.send();
    };
}
