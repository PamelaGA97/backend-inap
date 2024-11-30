import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Faculty } from "../faculties/faculty.entity";
import { BaseEntity } from "../base/base.entity";
import { Professor } from "../professors/professor.entity";

@Entity()
export class Course extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.courses, {onDelete: 'CASCADE'})
    faculty: Faculty;

    @OneToMany(() => Professor, (professor) => professor.course)
    professors: Professor[];
}