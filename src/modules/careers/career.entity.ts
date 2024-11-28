import { Column, Entity, IsNull, ManyToOne } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { Faculty } from "../faculties/faculty.entity";

@Entity()
export class Career extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.careers, {onDelete: 'CASCADE'})
    faculty: Faculty;
}