import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateFacultyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Tecnologia'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'TEC'})
    code: string;

    // @IsArray()
    // @ValidateNested({ each: true })
    // @ApiProperty({type: [CreateCareerDto]})
    // @Type(() => CreateCareerDto)
    // careers: CreateCareerDto[]

    // @IsArray()
    // @ValidateNested({ each: true })
    // @ApiProperty({type: [CreateCourseDto]})
    // @Type(() => CreateCourseDto)
    // courses: CreateCourseDto[]
}