import { Test, TestingModule } from '@nestjs/testing';
import { FacultyCourseService } from './faculty-course.service';

describe('FacultyCourseService', () => {
  let service: FacultyCourseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacultyCourseService],
    }).compile();

    service = module.get<FacultyCourseService>(FacultyCourseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
