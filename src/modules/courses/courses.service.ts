import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) {}

    async findAll(query: Record<string, any>): Promise<PaginationModel<Course>> {
        const page = Number(query.page) > 0 ? Number(query.page) : 1;
        const limit = Number(query.limit) > 0 ? Number(query.limit) : 10;

        const queryBuilder = this.courseRepository.createQueryBuilder('courses')
                                .orderBy('courses.createsAt', 'DESC');

        const response = await paginate<Course>(queryBuilder, { page, limit});
        return response;
    }

    async findOne(id: string): Promise<Course> {
        return this.courseRepository.findOne({
            where: { id },
            relations: ['users']
        });
    }

    async create(courseData: CreateCourseDto): Promise<Course> {
        const course = this.courseRepository.create(courseData);
        return this.courseRepository.save(course);
    }

    async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateCourseDto);
        return this.courseRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.courseRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.courseRepository.restore(id);
    }
}
