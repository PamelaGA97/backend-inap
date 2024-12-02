import { Module } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from './professor.entity';
import { ClassSchedule } from '../class-schedule/class-schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, ClassSchedule])],
  providers: [ProfessorsService],
  controllers: [ProfessorsController]
})
export class ProfessorsModule {}
