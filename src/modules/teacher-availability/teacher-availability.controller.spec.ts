import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAvailabilityController } from './teacher-availability.controller';
import { TeacherAvailabilityService } from './teacher-availability.service';

describe('TeacherAvailabilityController', () => {
  let controller: TeacherAvailabilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherAvailabilityController],
      providers: [TeacherAvailabilityService],
    }).compile();

    controller = module.get<TeacherAvailabilityController>(TeacherAvailabilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
