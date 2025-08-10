import { BaseEntity } from "src/modules/base/base.entity";
import { Column } from "typeorm";
import { PersonType } from "../enums/person-type.enum";

export class Person extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    ci: string;

    @Column()
    phone: string;

    @Column()
    type: PersonType;
}
