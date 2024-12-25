import {
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(50)
    @MinLength(1)
    @IsOptional()
    first_name?: string;

    @IsString()
    @MaxLength(50)
    @MinLength(1)
    @IsOptional()
    last_name?: string;

    @IsString()
    @MaxLength(50)
    @MinLength(1)
    @IsOptional()
    middle_name?: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date) // Преобразует строку в объект Date
    birth_date?: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date) // Преобразует строку в объект Date
    @IsOptional()
    hire_date?: Date;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    position_id?: number;

    @IsInt()
    @IsOptional()
    @Type(() => Number)
    department_id?: number;

    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional()
    current_status?: string;
}
