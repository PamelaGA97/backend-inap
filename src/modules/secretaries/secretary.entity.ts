import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "../base/base.entity";
import { User } from "../users/user.entity";
import { TurnsJob } from "../base/enums/turns-job.enum";
import { Branch } from "../base/enums/branch.enum";

@Entity()
export class Secretary extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    turn: TurnsJob;

    @Column()
    branch: Branch;

    @OneToOne(() => User, { eager: true })
    @JoinColumn()
    user: User;
}
