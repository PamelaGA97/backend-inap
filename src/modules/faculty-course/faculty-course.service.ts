import { Injectable } from '@nestjs/common';
import { FacultyCourse } from './faculty-course.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacultyCourseDto } from './dto/create-faculty-course.dto';
import { UpdateFacultyCourseDto } from './dto/update-faculty-course.dto';

@Injectable()
export class FacultyCourseService {
    constructor(
        @InjectRepository(FacultyCourse)
        private readonly facultyCourseRepository: Repository<FacultyCourse>,
    ) {}

    async findAll(query: Record<string, any>): Promise<FacultyCourse[]> {
        const filters: Record<string, any> = {};
        
        return this.facultyCourseRepository.find({
            where: filters,
            relations: ['faculty']
        });
    }

    async findOne(id: string): Promise<FacultyCourse> {
        return this.facultyCourseRepository.findOne({
            where: {id},
            relations: ['faculty']
        });
    }

    async create(facultyCourseData: CreateFacultyCourseDto ): Promise<FacultyCourse> {
        console.log(facultyCourseData)
        const facultyCourse = this.facultyCourseRepository.create(facultyCourseData);
        await this.facultyCourseRepository.save(facultyCourse);
        return facultyCourse;
    }

    async update(id: string, updateStudentDto: UpdateFacultyCourseDto): Promise<FacultyCourse> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateStudentDto);
        return this.facultyCourseRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.facultyCourseRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.facultyCourseRepository.restore(id);
    }
}
