import { Module } from '@nestjs/common';
import { FacultyCourseController } from './faculty-course.controller';
import { FacultyCourseService } from './faculty-course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultyCourse } from './faculty-course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FacultyCourse])],
  controllers: [FacultyCourseController],
  providers: [FacultyCourseService]
})
export class FacultyCourseModule {}
