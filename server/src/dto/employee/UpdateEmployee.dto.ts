import { Type } from 'class-transformer';
import {
    IsOptional,
    IsString,
    MaxLength,
    IsInt,
    IsDate,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class UpdateEmployeeDto {
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
    @Type(() => Date)
    birth_date?: Date;

    @IsNotEmpty()
    @IsDate()
    @IsOptional() 
    @Type(() => Date)
    hire_date?: Date;

    @IsInt()
    @IsOptional() 
    @Type(() => Number)
    position_id?: number;

    @IsString()
    @IsOptional()
    @Type(() => Number)
    department_id?: number;

    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    current_status?: string;
}
