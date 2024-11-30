import { Column, Entity, IsNull, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { Faculty } from "../faculties/faculty.entity";
import { Student } from "../students/student.entity";

@Entity()
export class Career extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.careers, {onDelete: 'CASCADE'})
    faculty: Faculty;

    @OneToMany(() => Student, (student) => student.career)
    students: Student[];
}