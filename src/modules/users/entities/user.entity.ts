import { BaseEntity, Column } from "typeorm";
import { UserEnum } from "../enums/user.enum";
import { UserRolEnum } from "../enums/user-rol-enum";

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
    type: UserEnum;

    @Column()
    rol: UserRolEnum;

    @Column()
    email: string;

    @Column()
    password: string;


}