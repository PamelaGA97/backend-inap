import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';
import { errorHanbler } from 'src/shared/utils/Error.utils';
import { validateFacultyInput } from 'src/common/utils/validate-faculty.util';
import { Faculty } from '../faculties/entities/faculty.entity';
import { UserRolEnum } from './enums/user-rol-enum';

@Injectable()
export class UsersService {
    private serviceName: string = 'UserService';
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
		@InjectRepository(Faculty)
		private readonly facultyRepository: Repository<Faculty>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const existEmail = await this.userRepository.findOne({where: { email: createUserDto.email }});
            if (existEmail) throw new BadRequestException('El email ya existe.');

            const existCi = await this.userRepository.findOne({where: {ci: createUserDto.ci}});
            if (existCi) throw new BadRequestException('El ci ya existe');

            if (createUserDto.password) {
                createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
            }

            if (createUserDto.rol === UserRolEnum.STUDENT || createUserDto.rol === UserRolEnum.PROFESSOR) {
                const faculty = await validateFacultyInput(
                    createUserDto.faculty as Faculty,
                    this.facultyRepository
                );
                createUserDto.faculty = faculty;
            }

            const user = await this.userRepository.create(createUserDto as {});
            return await this.userRepository.save(user);

        } catch(error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se pudo crear el usuario.');
        }
    }

    async findAll(query: Record<string, any>): Promise<PaginationModel<User>> {
        try {
            const page = Number(query.page) > 0 ? Number(query.page) : 1;
            const limit = Number(query.limit) > 0 ? Number(query.limit) : 10;
            
            const queryBuilder = this.userRepository.createQueryBuilder('users')
                                    .orderBy('users.createdAt', 'DESC');

            if (query.rol) {
                queryBuilder.andWhere('users.rol = :rol', { rol: query.rol });
            }
    
            const response = await paginate<User>(queryBuilder, { page, limit });
            return response;
        } catch(error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se cargan los usuarios.');
        }
    }

    async findOne(id: string): Promise<User> {
        try {
            const user = await this.userRepository.findOne({
                where: {id},
                relations: ['faculty', 'degree']
            })
            
            if (!user) {
                throw new BadRequestException('Usuario no encontrado');
            }

            return user;
        }
        catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se encontro el usuario.');
        }
        return await this.userRepository.findOneBy({id});
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        try {
            const entity = await this.findOne(id);
            if (!entity) {
                return null;
            }
            Object.assign(entity, updateUserDto);
            return this.userRepository.save(entity)
        } catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se pudo actualizar el usuario.');
        }
    }

    async remove(id: string): Promise<void> {
        try {
            await this.userRepository.softDelete(id);
        } catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se elimino el usuario.');
        }
    }

    async restore(id: string): Promise<void> {
        try {
            await this.userRepository.restore(id);
        } catch (error) {
            errorHanbler(this.serviceName, error);
            throw new BadRequestException('No se logro restaurar el usuario.');
        }
    }
}
