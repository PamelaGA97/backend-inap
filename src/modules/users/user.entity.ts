import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRolEnum } from './enum/user-rol.enum';
import { BaseEntity } from "../base/base.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    ci: string;

    @Column()
    cellphone: number;

    @Column()
    rol: UserRolEnum;
}