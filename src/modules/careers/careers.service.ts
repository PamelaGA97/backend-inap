import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Career } from './career.entity';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CareersService {
    constructor(
        @InjectRepository(Career)
        private readonly careerRepository: Repository<Career>
    ) {}

    async findAll(query: Record<string, any>): Promise<Career[]> {
        const filters: Record<string, any> = {};
        if(query.name) {
            filters.name = query.name;
        }

        return this.careerRepository.find({
            where: filters,
        })
    }

    async findOne(id: string): Promise<Career> {
        return this.careerRepository.findOne({
            where: {id}
        });
    }

    async create(careerData: CreateCareerDto): Promise<Career> {
        const career = this.careerRepository.create(careerData);
        return this.careerRepository.save(career);
    }

    async update(id: string, updateCareerDto: UpdateCareerDto): Promise<Career> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, UpdateCareerDto);
        return this.careerRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.careerRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.careerRepository.restore(id);
    }
}
