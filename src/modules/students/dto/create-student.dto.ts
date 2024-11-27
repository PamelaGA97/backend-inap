import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
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

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    faculty: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    career: string;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;
}