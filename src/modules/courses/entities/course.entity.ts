import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { Faculty } from "../../faculties/entities/faculty.entity";
import { CareerTimeEnum } from "../enum/career-time.enum";

@Entity()
export class Course extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.courses, {onDelete: 'CASCADE'})
    faculty: Faculty;

    // @OneToMany(() => Professor, (professor) => professor.course)
    // professors: Professor[];
}