import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const existEmail = await this.userRepository.findOne({where: { email: createUserDto.email }});
        if (existEmail) throw new BadRequestException('El email ya existe.');
        
        if (createUserDto.password) {
            const hashedpassword = await bcrypt.hash(createUserDto.password, 10);
            console.log('hash', hashedpassword)
            createUserDto.password = hashedpassword;
        }
        console.log(4, createUserDto)
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }

    async findAll(query: Record<string, any>): Promise<void> {}

    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOneBy({id});
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const entity = await this.findOne(id);
        if (!entity) {
            return null;
        }
        Object.assign(entity, updateUserDto);
        return this.userRepository.save(entity)
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.softDelete(id);
    }

    async restore(id: string): Promise<void> {
        await this.userRepository.restore(id);
    }
}
