import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/database/database.module';
import { FacultiesModule } from './modules/faculties/faculties.module';
import { PeopleModule } from './modules/people/people.module';
import { UsersModule } from './modules/users/users.module';
import { FacultyCareerSeeder } from './modules/faculties/seeders/faculty-career.seed';
import { DegreesModule } from './modules/degree/degrees.module';
import { CoursesModule } from './modules/courses/courses.module';
import { TeacherAvailabilityModule } from './modules/teacher-availability/teacher-availability.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/env/.env',
    }),
    DatabaseModule,
    DegreesModule,
    FacultiesModule,
    CoursesModule,
    UsersModule,
    // StudentsModule,
    // UsersModule,
    // SecretariesModule,
    // CareersModule,
    // ProfessorsModule,
    // ClassScheduleModule,
    // FacultyCourseModule,
    // InscriptionsModule,
    PeopleModule,
    TeacherAvailabilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private readonly seeder: FacultyCareerSeeder,
    // private readonly classScheduleSeeder: ClassScheduleSeeder
  ) {}

  async onModuleInit() {
    await this.seeder.seed();
    // await this.classScheduleSeeder.seed();
  }
}
