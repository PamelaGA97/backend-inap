import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";
import { Faculty } from "../faculties/faculty.entity";
import { Course } from "../courses/course.entity";
//import { ProfessorClassSchedule } from "../professor-class-schedule/professorClassSchedule.entity";
import { ClassSchedule } from "../class-schedule/class-schedule.entity";

@Entity()
export class Professor extends BaseEntity {

    @ManyToOne(() => Faculty, (faculty) => faculty.professors)
    @JoinColumn()
    faculty: Faculty;

    @ManyToOne(() => Course, (course) => course.professors)
    @JoinColumn()
    course: Course;

    @OneToOne(() => User, { eager: true, cascade: true })
    @JoinColumn()
    user: User;

    @ManyToMany(() => ClassSchedule, (classSchedule) => classSchedule.professors)
    @JoinTable()
    classSchedules: ClassSchedule[];
}
