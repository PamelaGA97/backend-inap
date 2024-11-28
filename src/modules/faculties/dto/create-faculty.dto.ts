import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { CreateCareerDto } from "src/modules/careers/dto/create-career.dto";
import { Type } from "class-transformer";

export class CreateFacultyDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Tecnologia'})
    name: string;

    @IsArray()
    @ValidateNested({ each: true })
    @ApiProperty({type: [CreateCareerDto]})
    @Type(() => CreateCareerDto)
    careers: CreateCareerDto[]
}