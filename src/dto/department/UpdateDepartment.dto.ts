import {
    IsOptional,
    IsString,
    MaxLength,
    IsInt,
    IsDate,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class UpdateDepartmentDto {
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    department_name?: string;

   
}
