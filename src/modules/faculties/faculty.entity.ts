import { Column, Entity, OneToMany } from "typeorm";
import { Career } from "../careers/career.entity";
import { BaseEntity } from "../base/base.entity";

@Entity()
export class Faculty extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => Career, (career) => career.faculty, { cascade: true })
    careers: Career[];
}