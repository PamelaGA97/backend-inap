import { Column, Entity, ManyToOne } from "typeorm";
import { Faculty } from "../faculties/faculty.entity";
import { BaseEntity } from "../base/base.entity";
import { FacultyCourseStatus } from "./enums/facultyCoursesStatus.enum";

@Entity()
export class FacultyCourse extends BaseEntity {
    @Column()
    name: string;

    @Column()
    room: string;

    @Column()
    amount: number;

    @Column()
    initDate: Date;

    @Column()
    finishDate: Date;

    @Column()
    status: FacultyCourseStatus;

    @ManyToOne(() => Faculty, (faculty) => faculty.facultyCourses)
    faculty: Faculty;
}