import { Column, Entity, IsNull, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";
import { User } from "src/modules/users/entities/user.entity";
import { CareerTimeEnum } from "src/modules/courses/enum/career-time.enum";

@Entity()
export class Degree extends BaseEntity {
    @Column()
    name: string;

    @Column()
    courseTime: CareerTimeEnum;

    @ManyToOne(() => Faculty, (faculty) => faculty.degrees, {onDelete: 'CASCADE'})
    faculty: Faculty;

    @OneToMany(() => User, (user) => user.degree)
    users: User[];
}