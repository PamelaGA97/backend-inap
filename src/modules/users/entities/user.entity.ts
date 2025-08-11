import { Column, Entity, TableInheritance } from "typeorm";
import { UserEnum } from "../enums/user.enum";
import { UserRolEnum } from "../enums/user-rol-enum";
import { BaseEntity } from "src/modules/base/base.entity";

@Entity('users')
@TableInheritance({ column: {type: 'varchar', name: 'type'}})
export class User extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column({unique: true})
    ci: string;

    @Column()
    phone: string;

    @Column()
    type: UserEnum;

    @Column()
    rol: UserRolEnum;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    password?: string;

    @Column()
    isAvaible: boolean;

    @Column()
    salary: number;
}