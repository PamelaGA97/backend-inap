import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Degree } from './entities/degrees.entity';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';

@Injectable()
export class DegreesService {
    constructor(
        @InjectRepository(Degree)
        private readonly degreeRepository: Repository<Degree>
    ) {}

    async findAll(query: Record<string, any>): Promise<PaginationModel<Degree>> {
        const page = Number(query.page) > 0 ? Number(query.page) : 1;
        const limit = Number(query.limit) > 0 ? Number(query.limit) : 10;

        const queryBuilder =  this.degreeRepository.createQueryBuilder('degrees')
                                .orderBy('degrees.createdAt', 'DESC');
        
        const responce = await paginate<Degree>(queryBuilder, { page, limit });
        return responce;
    }

    async findOne(id: string): Promise<Degree> {
        return this.degreeRepository.findOne({
            where: {id}
        });
    }

    async create(degreeData: CreateDegreeDto): Promise<Degree> {
        const career = this.degreeRepository.create(degreeData);
        return this.degreeRepository.save(career);
    }

    async update(id: string, updateDegreeDto: UpdateDegreeDto): Promise<Degree> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateDegreeDto);
        return this.degreeRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.degreeRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.degreeRepository.restore(id);
    }
}
