import {
    IsOptional,
    IsString,
    MaxLength,
    IsInt,
    IsDate,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class CreatePositionDto {
    @IsString()
    @MaxLength(50)
    @MinLength(5)
    @IsOptional() 
    position_name?: string;

}
