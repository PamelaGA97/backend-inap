import { Module } from '@nestjs/common';
import { TeacherAvailabilityService } from './teacher-availability.service';
import { TeacherAvailabilityController } from './teacher-availability.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherAvailability } from './entities/teacher-availability.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherAvailability])],
  providers: [TeacherAvailabilityService],
  controllers: [TeacherAvailabilityController],
})
export class TeacherAvailabilityModule {}
