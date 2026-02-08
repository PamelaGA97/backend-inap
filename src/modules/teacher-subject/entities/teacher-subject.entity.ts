import { BaseEntity } from "src/modules/base/base.entity";
import { Course } from "src/modules/courses/entities/course.entity";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";
import { User } from "src/modules/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('teacher_subjects')
export class TeacherSubject extends BaseEntity{
    @ManyToOne(() => User, (user) => user.teacherSubjects, {onDelete: 'CASCADE'})
    user: User;

    @ManyToOne(() => Faculty, {onDelete: 'CASCADE'})
    faculty: Faculty;

    @ManyToOne(() => Course, { onDelete: 'CASCADE' })
    course: Course;

    @Column({ default: true })
    isActive: boolean;    
}
