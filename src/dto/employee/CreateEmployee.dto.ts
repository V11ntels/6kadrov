import {
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsDate,
} from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    first_name?: string;

    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    last_name?: string;

    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    middle_name?: string;

    @IsNotEmpty()
    @IsDate()
    birth_date?: Date;

    @IsNotEmpty()
    @IsDate()
    @IsOptional() 
    hire_date?: Date;

    @IsInt()
    @IsOptional() 
    position_id?: number;

    @IsInt()
    @IsOptional()
    department_id?: number;

    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    current_status?: string;
}
