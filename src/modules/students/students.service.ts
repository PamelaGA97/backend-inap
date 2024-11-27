import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
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
        const filters: Record<string, any> = {};
        if (query.rol) {
            filters.rol = query.rol;
        }

        if (query.firstName) {
            filters.firstName = query.firstName;
        }

        if (query.secondName) {
            filters.secondName = query.secondName;
        }

        if (query.ci) {
            filters.ci = query.ci
        }

        return this.studentRepository.find({
            where: filters,
        });
    }

    async findOne(id: string): Promise<Student> {
        return this.studentRepository.findOneBy({id});
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
