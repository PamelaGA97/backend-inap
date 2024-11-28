import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from "src/modules/base/base.dto";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Matematicas'})
    name: string;
}