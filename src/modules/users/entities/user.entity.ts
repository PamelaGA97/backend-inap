import { Column, Entity, ManyToOne, TableInheritance } from "typeorm";
import { UserRolEnum } from "../enums/user-rol-enum";
import { BaseEntity } from "src/modules/base/base.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";

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
    faculty: Faculty

    // Professor
    // @Column({nullable: true})
    // initialDate: Date;

    // @Column({nullable: true})
    // finishDate: Date;

    
}