import { Injectable } from '@nestjs/common';
import { Faculty } from './faculty.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Injectable()
export class FacultiesService {
    constructor(
        @InjectRepository(Faculty)
        private readonly facultyRepository: Repository<Faculty>,
    ) {}

    async findAll(query: Record<string, any>): Promise<Faculty[]> {
        const filters: Record<string, any> = {};
        if (query.name) {
            filters.name = query.name;
        }

        return this.facultyRepository.find({
            where: filters,
            relations: ['careers', 'courses']
        });
    }

    async findOne(id: string): Promise<Faculty> {
        return this.facultyRepository.findOne({
            where: { id },
            relations: ['careers', 'courses']
        });
    }

    async create(facultyData: CreateFacultyDto): Promise<Faculty> {
        const faculty = this.facultyRepository.create(facultyData);
        await this.facultyRepository.save(faculty);
        return faculty;
    }

    async update(id: string, updateFacultyDto: UpdateFacultyDto): Promise<Faculty> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateFacultyDto);
        return this.facultyRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.facultyRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.facultyRepository.restore(id);
    }
}
