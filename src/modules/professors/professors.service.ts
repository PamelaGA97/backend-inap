import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor.entity';
import { Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Injectable()
export class ProfessorsService {
    constructor(
        @InjectRepository(Professor)
        private readonly professorRepository: Repository<Professor>,
    ) {}

    async findAll(query: Record<string, any>): Promise<Professor[]> {
        const filters: Record<string, any> = {};
        if (query.name) {
            filters.name = query.name;
        }

        return this.professorRepository.find({
            where: filters,
            relations: ['careers', 'courses']
        });
    }

    async findOne(id: string): Promise<Professor> {
        return this.professorRepository.findOne({
            where: { id },
            relations: ['careers', 'courses']
        });
    }

    async create(professorData: CreateProfessorDto): Promise<Professor> {
        const Professor = this.professorRepository.create(professorData);
        await this.professorRepository.save(Professor);
        return Professor;
    }

    async update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateProfessorDto);
        return this.professorRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.professorRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.professorRepository.restore(id);
    }
}
