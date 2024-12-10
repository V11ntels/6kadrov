import {
    IsOptional,
    IsString,
    MaxLength,
    IsInt,
    IsDate,
    IsNotEmpty,
    MinLength,
} from 'class-validator';

export class UpdatePostDto {
    @IsOptional()
    @IsString()
    @MaxLength(255)
    @MinLength(5)
    post_title?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    post_content?: string;

    @IsOptional()
    @IsInt()
    author_id?: number;

    @IsOptional()
    @IsInt()
    image_id?: number;

    @IsOptional()
    @IsDate()
    post_created?: Date;
}
