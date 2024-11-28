import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { FindOptionsWhere, FindOptionsWhereProperty, Repository } from 'typeorm';
import { User } from '../users/user.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findAll(query: Record<string, any>): Promise<Student[]> {
        const filters: FindOptionsWhere<Student> = {};
        if (query.user?.rol) {
            filters.user = {
                rol: query.user.rol
            }
        }

        if (query.user.firstName) {
            filters.user = {
                firstName: query.user.firstName
            }
        }

        return this.studentRepository.find({
            where: filters,
            relations: ['user']
        });
    }

    async findOne(id: string): Promise<Student> {
        return this.studentRepository.findOne({
            where: {id},
            relations: ['user']
        });
    }

    async create(studentData: CreateStudentDto, userData: CreateUserDto ): Promise<Student> {
        const user = this.userRepository.create(userData);
        await this.userRepository.save(user);
        const student = this.studentRepository.create({
            ...studentData,
            user
        });
        return this.studentRepository.save(student);
    }

    async update(id: string, updateStudentDto: UpdateStudentDto): Promise<Student> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateStudentDto);
        return this.studentRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.studentRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.studentRepository.restore(id);
    }
}
