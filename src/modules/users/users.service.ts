import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
      ) {}
    
    async findAll(query: Record<string, any>): Promise<User[]> {
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

        return this.usersRepository.find({
            where: filters,
        });
    }

    async findOne(id: string): Promise<User> {
        return this.usersRepository.findOneBy({id});
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.usersRepository.create(createUserDto);
        return this.usersRepository.save(user);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const entity = await this.findOne(id);
        if (!entity) {
        return null;
        }
        Object.assign(entity, updateUserDto);
        return this.usersRepository.save(entity);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.usersRepository.restore(id);
    }
}
