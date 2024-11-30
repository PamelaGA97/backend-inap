import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { BaseEntity } from "src/modules/base/base.entity";
import { Course } from "src/modules/courses/course.entity";
import { CreateCourseDto } from "src/modules/courses/dto/create-course.dto";
import { CreateFacultyDto } from "src/modules/faculties/dto/create-faculty.dto";
import { Faculty } from "src/modules/faculties/faculty.entity";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { User } from "src/modules/users/user.entity";


export class CreateProfessorDto extends BaseEntity {

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateFacultyDto)
    faculty: CreateFacultyDto;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateCourseDto)
    course: CreateCourseDto;

    @ApiProperty({type: CreateUserDto})
    user: User;
}