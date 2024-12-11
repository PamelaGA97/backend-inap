import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from './professor.entity';
import { In, Repository } from 'typeorm';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';
//import { ProfessorClassSchedule } from '../professor-class-schedule/professorClassSchedule.entity';
import { ClassSchedule } from '../class-schedule/class-schedule.entity';

@Injectable()
export class ProfessorsService {
    constructor(
        @InjectRepository(Professor)
        private readonly professorRepository: Repository<Professor>,
        @InjectRepository(ClassSchedule)
        private readonly classScheduleRepository: Repository<ClassSchedule>
        //InjectRepository(ProfessorClassSchedule)
        //private readonly professorClassScheduleRepository: Repository<ProfessorClassSchedule>,
    ) {}

    async findAll(query: Record<string, any>): Promise<Professor[]> {
        const filters: Record<string, any> = {};
        if(query.faculty) {
            filters.faculty = { name: query.faculty }
        }
        
        if (query.course) {
            filters.course = { name: query.course };
        }
        
        return await this.professorRepository.find({
            where: filters,
            relations: ['user', 'course', 'faculty', 'classSchedules']
        });
    }

    async findOne(id: string): Promise<Professor> {
        return this.professorRepository.findOne({
            where: { id },
            relations: ['user', 'course', 'faculty', 'classSchedules']
            });
            }
            
    async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
        const professor = this.professorRepository.create(createProfessorDto);
        await this.professorRepository.save(professor);
        /*
        const { faculty, course, user } = createProfessorDto;        
        const { classScheduleIds } = createProfessorDto;
        const schedules = await this.classScheduleRepository.find({
            where: {
              id: In(classScheduleIds),
            },
          });
        if (schedules.length !== classScheduleIds.length) {
            throw new NotFoundException('One or more class schedules not found');
        }
        const professor = this.professorRepository.create({ faculty, course, user, classSchedules: schedules });
        await this.professorRepository.save(professor);

        // Crear las relaciones en la tabla intermedia
        const professorSchedules = schedules.map((schedule) => {
        const professorSchedule = new ProfessorClassSchedule();
        professorSchedule.professor = professor;
        professorSchedule.classSchedule = schedule;
        return professorSchedule;
        });

        console.log(createProfessorDto)
        */
        return professor;
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
