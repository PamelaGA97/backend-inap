import { Column, Entity, ManyToOne } from "typeorm";
import { Faculty } from "../faculties/faculty.entity";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class FacultyCourse extends BaseEntity {
    @Column()
    room: string;

    @Column()
    initDate: Date;

    @Column()
    finishDate: Date;

    @ManyToOne(() => Faculty, (faculty) => faculty.facultyCourses)
    faculty: Faculty;
}