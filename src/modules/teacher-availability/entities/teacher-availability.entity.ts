import { BaseEntity } from "src/modules/base/base.entity";
import { User } from "src/modules/users/entities/user.entity";
import { DayOfWeekEnum } from "src/shared/enums/day-of-week.enum";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class TeacherAvailability extends BaseEntity {
    @Column({ type: 'enum', enum: DayOfWeekEnum })
    day: string;

    @Column({ type: 'varchar', length: 5 })
    startTime: string;

    @Column({ type: 'varchar', length: 5 })
    endTime: string;

    @Column({ default: true })
    isAvailable: boolean;

    @ManyToOne(() => User, (user) => user.teacherAvailabilities, { onDelete: 'CASCADE' })
    user: User;
}
