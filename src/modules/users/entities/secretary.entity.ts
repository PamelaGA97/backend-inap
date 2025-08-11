import { ChildEntity, Column } from "typeorm";
import { User } from "./user.entity";

@ChildEntity('secretary')
export class Secretary extends User {
    @Column()
    address: string;
}