import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { UserRolEnum } from "../enums/user-rol-enum";
import { BaseEntity } from "src/modules/base/base.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";
import { Degree } from "src/modules/degree/entities/degrees.entity";
import { Course } from "src/modules/courses/entities/course.entity";
import { TeacherAvailability } from "src/modules/teacher-availability/entities/teacher-availability.entity";
import { TeacherSubject } from '../../teacher-subject/entities/teacher-subject.entity';

@Entity('users')
export class User extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    ci: string;

    @Column()
    phone: string;

    @Column()
    rol: UserRolEnum;

    @Column()
    email: string;

    @Column({select: false})
    password?: string;

    @Column()
    isAvaible: boolean;

    @Column({nullable: true})
    salary: number;

    // secretary
    @Column({nullable: true})
    turn: string;

    // student
    @Column({nullable: true})
    highschool: string;

    @Column({nullable: true})
    graduationYear: string;

    @ManyToOne(() => Faculty, (faculty) => faculty.users)
    faculty: Faculty;

    @ManyToOne(() => Degree, (degree) => degree.users)
    degree: Degree;

    @OneToMany(() => TeacherAvailability, (availability) => availability.user, {
        cascade: true,
        eager: true,
    })
    teacherAvailabilities: TeacherAvailability[];

    @OneToMany(() => TeacherSubject, (teacherSubject) => teacherSubject.user, { onDelete: 'CASCADE' })
    teacherSubjects: TeacherSubject[];
}
