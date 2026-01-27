import { BaseEntity } from "src/modules/base/base.entity";
import { DayOfWeekEnum } from "src/shared/enums/day-of-week.enum";
import { Column, Entity } from "typeorm";

@Entity()
export class TeacherAvailability extends BaseEntity {
    @Column({ type: 'enum', enum: DayOfWeekEnum })
    day: string;

    @Column({ type: 'time'})
    startTime: string;

    @Column({ type: 'time' })
    endTime: string;

    @Column({ default: true })
    isAvailable: boolean;
}
