import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "src/modules/base/base.entity";
import { Course } from "src/modules/courses/entities/course.entity";
import { Degree } from "src/modules/degree/entities/degrees.entity";
import { User } from "src/modules/users/entities/user.entity";
// import { Career } from "../careers/career.entity";
// import { Student } from "../students/student.entity";
// import { Professor } from "../professors/professor.entity";
// import { FacultyCourse } from '../faculty-course/faculty-course.entity';

@Entity()
export class Faculty extends BaseEntity {
    @Column()
    name: string;

    @Column()
    code: string;

    @OneToMany(() => Degree, (degree) => degree.faculty, { cascade: true })
    degrees: Degree[];

    @OneToMany(() => Course, (course) => course.faculty, { cascade: true })
    courses: Course[];

    @OneToMany(() => User, (user) => user.faculty)
    users: User[];

    // @OneToMany(() => Student, (student) => student.faculty)
    // students: Student[];

    // @OneToMany(() => Professor, (professor) => professor.faculty)
    // professors: Professor[];

    // @OneToMany(() => FacultyCourse, (facultyCourse) => facultyCourse.faculty)
    // facultyCourses: FacultyCourse[];
}