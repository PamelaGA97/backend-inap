import { Column, Entity, OneToMany } from "typeorm";
import { Career } from "../careers/career.entity";
import { BaseEntity } from "../base/base.entity";
import { Course } from "../courses/course.entity";
import { Student } from "../students/student.entity";
import { Professor } from "../professors/professor.entity";

@Entity()
export class Faculty extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => Career, (career) => career.faculty, { cascade: true })
    careers: Career[];

    @OneToMany(() => Course, (course) => course.faculty, { cascade: true })
    courses: Course[];

    @OneToMany(() => Student, (student) => student.faculty)
    students: Student[];

    @OneToMany(() => Professor, (professor) => professor.faculty)
    professors: Professor[];
}