import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { StudentsModule } from './modules/students/students.module';
import { SecretariesModule } from './modules/secretaries/secretaries.module';
import { CareersModule } from './modules/careers/careers.module';
import { FacultiesModule } from './modules/faculties/faculties.module';
import { ProfessorsModule } from './modules/professors/professors.module';
import { CoursesModule } from './modules/courses/courses.module';
import { ClassScheduleModule } from './modules/class-schedule/class-schedule.module';
import { FacultyCareerSeeder } from './modules/faculties/seeders/faculty-career.seed';
import { ClassScheduleSeeder } from './modules/class-schedule/seeders/class-schedule.seed';
import { FacultyCourseModule } from './modules/faculty-course/faculty-course.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    StudentsModule,
    UsersModule,
    SecretariesModule,
    CareersModule,
    FacultiesModule,
    ProfessorsModule,
    CoursesModule,
    ClassScheduleModule,
    FacultyCourseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly seeder: FacultyCareerSeeder,
    private readonly classScheduleSeeder: ClassScheduleSeeder
  ) {}

  async onModuleInit() {
    await this.seeder.seed();
    await this.classScheduleSeeder.seed();
  }
}
