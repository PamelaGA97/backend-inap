import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { CareerTimeEnum } from "src/modules/courses/enum/career-time.enum";

export class CreateDegreeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'tecnologia'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: CareerTimeEnum.YEAR})
    courseTime: CareerTimeEnum;
}