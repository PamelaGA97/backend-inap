import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTeacherAvailabilityDto } from './dto/create-teacher-availability.dto';
import { UpdateTeacherAvailabilityDto } from './dto/update-teacher-availability.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherAvailability } from './entities/teacher-availability.entity';
import { Repository } from 'typeorm';
import { errorHanbler } from 'src/shared/utils/Error.utils';
import { PaginationModel } from 'src/shared/hepers/pagination/model/pagination.model';
import { paginate } from 'src/shared/hepers/pagination/pagination.helper';

@Injectable()
export class TeacherAvailabilityService {
	private _serviceName: 'TeacherAvailabilityService';

	constructor(
		@InjectRepository(TeacherAvailability)
		private readonly _teacherAvailabilityRepository: Repository<TeacherAvailability>,
	) {}

	async create(createTeacherAvailabilityDto: CreateTeacherAvailabilityDto) {
		try {
			const teacheravailability = this._teacherAvailabilityRepository
										.create(createTeacherAvailabilityDto)
			await this._teacherAvailabilityRepository.save(teacheravailability);
			return teacheravailability;
		} catch (error) {
			errorHanbler(this._serviceName, error);
			throw new Error('No se pudo guardar el horario disponible del docente');
		}
	}

  	async findAll(query: Record<string, any>): Promise<PaginationModel<TeacherAvailability>> {
		try {
			const page = Number(query.page) > 0 ? Number(query.page) : 1;
			const limit = Number(query.limit) > 0 ? Number(query.limit) : 30;

			const queryBuilder = this._teacherAvailabilityRepository
									.createQueryBuilder('TeacherAvailabilities')
									.orderBy('TeacherAvailabilities.createdAt', 'DESC');

			const response = await paginate<TeacherAvailability>(queryBuilder, {page, limit});
			return response;

		} catch (error) {
			errorHanbler(this._serviceName, error);
			throw new Error('No se pudieron cargar los horarios disponibles de los docentes');
		}
	}

	async findOne(id: string): Promise<TeacherAvailability> {
		try {
			return this._teacherAvailabilityRepository.findOne({
			where: { id }
			});
		} catch (error) {
			errorHanbler(this._serviceName, error);
			throw new Error('No se pudo cargar el horario disponible del docente');
		}
	}

	async update(id: string, updateTeacherAvailabilityDto: UpdateTeacherAvailabilityDto): Promise<TeacherAvailability> {
		try {
			const entity = await this.findOne(id);
			if(!entity) {
				return null;
			}
			Object.assign(entity, updateTeacherAvailabilityDto);
			return this._teacherAvailabilityRepository.save(entity);
		} catch (error) {
			errorHanbler(this._serviceName, error);
			throw new BadRequestException('No se logro actualizar el horario disponible del docente.');
		}
	}

	async remove(id: string): Promise<void> {
		try {
			await this._teacherAvailabilityRepository.delete(id);
		} catch (error) {
			errorHanbler(this._serviceName, error);
			throw new BadRequestException('No se logro eliminar el horario disponible');
		}
	}

	async restore(id: string): Promise<void> {
        try {
            await this._teacherAvailabilityRepository.restore(id);
        } catch (error) {
            errorHanbler(this._serviceName, error);
            throw new BadRequestException('No se logro restaurar el horario disponible.');
        }
    }
}
