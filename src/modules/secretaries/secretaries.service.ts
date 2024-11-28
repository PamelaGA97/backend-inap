import { Injectable } from '@nestjs/common';
import { Secretary } from './secretary.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';

@Injectable()
export class SecretariesService {
    constructor(
        @InjectRepository(Secretary)
        private readonly secretaryRepository: Repository<Secretary>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll(query: Record<string, any>): Promise<Secretary[]> {
        const filters: Record<string, any> = {};
        if (query.user?.rol) {
            filters.rol = query.user.rol;
        }

        return this.secretaryRepository.find({
            where: filters,
            relations: ['user']
        });
    }

    async findOne(id: string): Promise<Secretary> {
        return this.secretaryRepository.findOne({
            where: {id},
            relations: ['user']
        });
    }

    async create(secretaryData: CreateSecretaryDto, userData: CreateUserDto ): Promise<Secretary> {
        const user = this.userRepository.create(userData);
        await this.userRepository.save(user);
        const secretary = this.secretaryRepository.create({
            ...secretaryData,
            user
        });
        return this.secretaryRepository.save(secretary);
    }

    async update(id: string, updateStudentDto: UpdateSecretaryDto): Promise<Secretary> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateStudentDto);
        return this.secretaryRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.secretaryRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.secretaryRepository.restore(id);
    }
}
