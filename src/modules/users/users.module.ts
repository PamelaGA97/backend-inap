import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Faculty } from '../faculties/entities/faculty.entity';
import { Degree } from '../degree/entities/degrees.entity';
import { TeacherAvailability } from '../teacher-availability/entities/teacher-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Faculty, Degree, TeacherAvailability])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
