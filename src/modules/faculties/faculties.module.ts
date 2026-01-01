import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { FacultiesController } from './faculties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyCareerSeeder } from './seeders/faculty-career.seed';
import { Faculty } from './entities/faculty.entity';
import { Degree } from '../degree/entities/degrees.entity';
import { Course } from '../courses/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty, Degree, Course])],
  providers: [FacultiesService, FacultyCareerSeeder],
  controllers: [FacultiesController],
  exports: [FacultyCareerSeeder]
})
export class FacultiesModule {}
