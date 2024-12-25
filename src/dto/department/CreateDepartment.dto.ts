import {
    IsOptional,
    IsString,
    MaxLength,
    IsInt,
    IsDate,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class CreateDepartmentDto {
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    department_name?: string;

}
