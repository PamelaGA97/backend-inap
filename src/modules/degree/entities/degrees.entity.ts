import { Column, Entity, IsNull, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../base/base.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";
import { User } from "src/modules/users/entities/user.entity";

@Entity()
export class Degree extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.degrees, {onDelete: 'CASCADE'})
    faculty: Faculty;

    @OneToMany(() => User, (user) => user.degree)
    users: User[];
}