import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from "src/modules/base/base.dto";
import { CareerTimeEnum } from "../enum/career-time.enum";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Matematicas'})
    name: string;

    @IsOptional()
    @IsString()
    @ApiProperty({example: 'semestral'})
    courseTime: CareerTimeEnum;
}