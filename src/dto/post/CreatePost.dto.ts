import {
    IsString,
    MaxLength,
    MinLength,
    IsNotEmpty,
    IsInt,
    IsOptional,
    IsDate,
} from 'class-validator';

export class CreatePostDto {
    @IsString()
    @MaxLength(255)
    @MinLength(5)
    post_title: string;

    @IsNotEmpty()
    @IsString()
    post_content: string;

    @IsInt()
    author_id: number;

    @IsOptional()
    @IsInt()
    image_id?: number;

    @IsOptional()
    @IsDate()
    post_created?: Date;
}
