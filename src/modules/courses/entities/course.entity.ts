import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { Faculty } from "../../faculties/entities/faculty.entity";
import { User } from "src/modules/users/entities/user.entity";

@Entity()
export class Course extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.courses, {onDelete: 'CASCADE'})
    faculty: Faculty;
}
