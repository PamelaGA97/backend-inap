import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Faculty } from './entities/faculty.entity';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';
import { errorHanbler } from 'src/shared/utils/Error.utils';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';
import { Degree } from '../degree/entities/degrees.entity';

@Injectable()
export class FacultiesService {
    private serviceName: string = 'FacultyService';
    constructor(
        @InjectRepository(Faculty)
        private readonly facultyRepository: Repository<Faculty>,
        @InjectRepository(Degree)
        private readonly degreeRepository: Repository<Degree>
    ) {}
    
    async create(facultyData: CreateFacultyDto): Promise<Faculty> {
        try {
            const faculty = this.facultyRepository.create(facultyData);
            await this.facultyRepository.save(faculty);
            return faculty;
        } catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('Algo salio mal, No se creo la facultad');
        }
    }

    async findAll(query: Record<string, any>): Promise<PaginationModel<Faculty>> {
        try {
            const page = Number(query.page) > 0 ? Number(query.page) : 1;
            const limit = Number(query.limit) > 0 ? Number(query.limit) : 10;

            const queryBuilder = this.facultyRepository.createQueryBuilder('faculties')
                                    .orderBy('faculties.createdAt', 'DESC');
            if (query.name) {
                queryBuilder.andWhere('faculties.name ILIKE :name', { name: `%${query.name}%` });
            }

            // queryBuilder.relation('degrees');
            // queryBuilder.relation('courses');

            const response = await paginate<Faculty>(queryBuilder, { page, limit });
            return response;

        } catch(error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se cargan las facultades');
        }
    }

    async findOne(id: string): Promise<Faculty> {
        return this.facultyRepository.findOne({
            where: { id },
            //relations: ['careers', 'courses']
        });
    }

    async findDegrees(id: string): Promise<PaginationModel<Degree>> {
        try {
            const queryBuilder = this.degreeRepository.createQueryBuilder('degrees')
                .leftJoin('degrees.faculty', 'faculty')
                .where('faculty.id = :id', { id })
                .orderBy('degrees.createdAt', 'DESC');

            const response = await paginate<Degree>(queryBuilder, { page: 1, limit: 100 });
            return response;

        } catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se pudieron obtener las carreras de la facultad');
        }
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
