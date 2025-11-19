import { Column, Entity, IsNull, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";

@Entity()
export class Degree extends BaseEntity {
    @Column()
    name: string;

    @Column()
    courseTime: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.degrees, {onDelete: 'CASCADE'})
    faculty: Faculty;

    // @OneToMany(() => Student, (student) => student.career)
    // students: Student[];
}