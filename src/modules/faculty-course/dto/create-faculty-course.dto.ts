import { IsArray, IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Type } from "class-transformer";
import { CreateFacultyDto } from "src/modules/faculties/dto/create-faculty.dto";

export class CreateFacultyCourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: '25A'})
    room: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({example: '2024-12-12'})
    initDate: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({example: '2025-06-06'})
    finishDate: string;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateFacultyDto)
    faculty: CreateFacultyDto;
}