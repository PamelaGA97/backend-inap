import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, IsUUID, ValidateNested } from "class-validator";
import { BaseEntity } from "src/modules/base/base.entity";
import { ClassSchedule } from "src/modules/class-schedule/class-schedule.entity";
import { CreateClassScheduleDto } from "src/modules/class-schedule/dto/create-class-schedule.dto";
import { Course } from "src/modules/courses/course.entity";
import { CreateCourseDto } from "src/modules/courses/dto/create-course.dto";
import { CreateFacultyDto } from "src/modules/faculties/dto/create-faculty.dto";
import { Faculty } from "src/modules/faculties/faculty.entity";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { User } from "src/modules/users/user.entity";


export class CreateProfessorDto extends BaseEntity {

    @ApiProperty()
    @Type(() => CreateFacultyDto)
    faculty: CreateFacultyDto;

    @ApiProperty()
    @Type(() => CreateCourseDto)
    course: CreateCourseDto;

    @ApiProperty({type: CreateUserDto})
    user: User;

    @IsArray()
    @IsNotEmpty({ each: true })
    @ApiProperty({type: [CreateClassScheduleDto], example: []})
    classSchedules: ClassSchedule[];
}