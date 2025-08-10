import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';

@Injectable()
export class PeopleService {

  constructor(
    @InjectRepository(Person)
    private readonly peopleRepository: Repository<Person>,
  ) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const person = await this.peopleRepository.create(createPersonDto);
    return this.peopleRepository.save(person);
  }

  async findAll(query: Record<string, any>): Promise<PaginationModel<Person>> {
    const page = parseInt(query.page) ?? 1;
    const limit = parseInt(query.limit) ?? 10;

    const name = query.name?.toLowerCase();
    const type = query.type;

    const queryBuilder = await this.peopleRepository.createQueryBuilder('person');

    if (name || type) {
      queryBuilder.where('1=1');
      if (name) {
        queryBuilder.andWhere('LOWER(person.name) LIKE :name', {
          name: `%${name}%`
        });
      }

      if (type) {
        queryBuilder.andWhere('person.type LIKE :type', {
          type: `%${type}%`
        });
      }
    }

    const response = await paginate<Person>(queryBuilder, {page, limit})

    return response;
  }

  async findOne(id: string): Promise<Person> {
    return await this.peopleRepository.findOneBy({id});
  }

  async update(id: string, updatePersonDto: UpdatePersonDto): Promise<Person> {
    const entity = await this.findOne(id);
    if (!entity) {
      return null;
    }
    Object.assign(entity, updatePersonDto);
    return this.peopleRepository.save(entity);
  }

  async remove(id: string): Promise<void> {
    await this.peopleRepository.softDelete(id);
  }

  async restore(id: string): Promise<void> {
    await this.peopleRepository.restore(id);
  }
}
