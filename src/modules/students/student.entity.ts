import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";
import { Faculty } from "../faculties/faculty.entity";
import { Career } from "../careers/career.entity";

@Entity()
export class Student extends BaseEntity {
    @Column()
    highschool: string;

    @Column()
    graduationYear: Date;

    @OneToOne(() => User, { eager: true, cascade: true })
    @JoinColumn()
    user: User;

    @ManyToOne(() => Faculty, (faculty) => faculty.students)
    faculty: Faculty;

    @ManyToOne(() => Career, (career) => career.students)
    career: Career;
}
