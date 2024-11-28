import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/modules/base/base.entity";
import { Course } from "src/modules/courses/course.entity";
import { CreateCourseDto } from "src/modules/courses/dto/create-course.dto";
import { CreateFacultyDto } from "src/modules/faculties/dto/create-faculty.dto";
import { Faculty } from "src/modules/faculties/faculty.entity";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { User } from "src/modules/users/user.entity";
import { Entity, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class CreateProfessorDto extends BaseEntity {
    @OneToOne(() => Faculty, { eager: true })
    @JoinColumn()
    @ApiProperty({type: [CreateFacultyDto]})
    faculty: Faculty;

    @OneToOne(() => Course, { eager: true })
    @JoinColumn()
    @ApiProperty({type: [CreateCourseDto]})
    course: Course;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    @ApiProperty({type: [CreateUserDto]})
    user: User;
}