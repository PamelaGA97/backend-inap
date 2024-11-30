import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";
import { Faculty } from "../faculties/faculty.entity";
import { Course } from "../courses/course.entity";

@Entity()
export class Professor extends BaseEntity {

    @ManyToOne(() => Faculty, (faculty) => faculty.professors)
    faculty: Faculty;

    @ManyToOne(() => Course, (course) => course.professors)
    course: Course;

    @OneToOne(() => User, { eager: true, cascade: true })
    @JoinColumn()
    user: User;
}
