import { CreateUserDto } from '../../users/dto/create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStudentDto extends PartialType(CreateUserDto) {}