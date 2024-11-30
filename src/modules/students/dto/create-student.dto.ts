import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateCareerDto } from "src/modules/careers/dto/create-career.dto";
import { CreateFacultyDto } from "src/modules/faculties/dto/create-faculty.dto";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";

export class CreateStudentDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    highschool: string;

    @IsDateString()
    @IsNotEmpty()
    @ApiProperty({example: '2023-10-09'})
    graduationYear: string;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateFacultyDto)
    faculty: CreateFacultyDto;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateCareerDto)
    career: CreateCareerDto;
}
