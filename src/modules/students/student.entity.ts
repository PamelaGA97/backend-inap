import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";

@Entity()
export class Student extends BaseEntity {
    @Column()
    highschool: string;

    @Column()
    graduationYear: Date;

    @Column()
    faculty: string;

    @Column()
    career: String;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;
}
