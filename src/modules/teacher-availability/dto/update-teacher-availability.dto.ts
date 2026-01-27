import { PartialType } from '@nestjs/swagger';
import { CreateTeacherAvailabilityDto } from './create-teacher-availability.dto';

export class UpdateTeacherAvailabilityDto extends PartialType(CreateTeacherAvailabilityDto) {}
