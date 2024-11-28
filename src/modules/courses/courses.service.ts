import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>
    ) {}

    async findAll(query: Record<string, any>): Promise<Course[]> {
        const filters: Record<string, any> = {};
        if(query.name) {
            filters.name = query.name;
        }

        return this.courseRepository.find({
            where: filters,
        })
    }

    async findOne(id: string): Promise<Course> {
        return this.courseRepository.findOne({
            where: { id }
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
