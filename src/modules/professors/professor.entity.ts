import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";
import { Faculty } from "../faculties/faculty.entity";
import { Course } from "../courses/course.entity";

@Entity()
export class Professor extends BaseEntity {
    @OneToOne(() => Faculty, { eager: true })
    @JoinColumn()
    faculty: Faculty;

    @OneToOne(() => Course, { eager: true })
    @JoinColumn()
    course: Course;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;
}
