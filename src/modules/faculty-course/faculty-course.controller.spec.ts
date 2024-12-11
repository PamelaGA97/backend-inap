import { Test, TestingModule } from '@nestjs/testing';
import { FacultyCourseController } from './faculty-course.controller';

describe('FacultyCourseController', () => {
  let controller: FacultyCourseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacultyCourseController],
    }).compile();

    controller = module.get<FacultyCourseController>(FacultyCourseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
