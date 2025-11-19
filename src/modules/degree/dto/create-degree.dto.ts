import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateDegreeDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'tecnologia'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'tecnologia'})
    courseTime: string;
}