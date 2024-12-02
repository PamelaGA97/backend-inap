import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { CreateCareerDto } from "src/modules/careers/dto/create-career.dto";
import { Type } from "class-transformer";
import { CreateCourseDto } from "src/modules/courses/dto/create-course.dto";

export class CreateFacultyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Tecnologia'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'TEC'})
    code: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({type: [CreateCareerDto]})
    @Type(() => CreateCareerDto)
    careers: CreateCareerDto[]

    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({type: [CreateCourseDto]})
    @Type(() => CreateCourseDto)
    courses: CreateCourseDto[]
}