import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";

export class Student extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
