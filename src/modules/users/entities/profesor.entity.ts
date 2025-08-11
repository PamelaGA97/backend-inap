import { ChildEntity, Column } from "typeorm";
import { User } from "./user.entity";

@ChildEntity('professor')
export class Professor extends User {
    @Column()
    initialDate: Date;

    @Column()
    finishDate: Date;
}