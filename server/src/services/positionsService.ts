import AppDataSource from '../config/database.js';
import { CreatePositionDto } from '../dto/position/CreatePosition.dto.js';
import { UpdatePositionDto } from '../dto/position/UpdatePosition.dto.js';
import {Position  } from '../entities/positions.js';

const positionRepo = AppDataSource.getRepository(Position);

export default class PositionService {
    static async getAllPositions() {
        const positions = await positionRepo.find();

        return positions;
    }

    static async getPositionById(id: number) {
        const position = await positionRepo.findOneBy({ position_id: id });

        return position;
    }

    static async updatePositionById(id: number, dataUpdate: UpdatePositionDto) {
        await positionRepo.update({ position_id: id }, dataUpdate);
    }

    static async createPosition(dataPosition: CreatePositionDto) {
        await positionRepo.insert(dataPosition);
    }

    static async deletePosition(id: number) {
        await positionRepo.delete(id);
    }
}
