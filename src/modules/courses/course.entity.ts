import { Column, Entity, ManyToOne } from "typeorm";
import { Faculty } from "../faculties/faculty.entity";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class Course extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.courses, {onDelete: 'CASCADE'})
    faculty: Faculty;
}