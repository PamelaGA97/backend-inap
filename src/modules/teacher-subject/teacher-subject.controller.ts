import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherSubjectService } from './teacher-subject.service';
import { CreateTeacherSubjectDto } from './dto/create-teacher-subject.dto';
import { UpdateTeacherSubjectDto } from './dto/update-teacher-subject.dto';

@Controller('teacher-subject')
export class TeacherSubjectController {
  constructor(private readonly teacherSubjectService: TeacherSubjectService) {}

  @Post()
  create(@Body() createTeacherSubjectDto: CreateTeacherSubjectDto) {
    return this.teacherSubjectService.create(createTeacherSubjectDto);
  }

  @Get()
  findAll() {
    return this.teacherSubjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherSubjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherSubjectDto: UpdateTeacherSubjectDto) {
    return this.teacherSubjectService.update(+id, updateTeacherSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherSubjectService.remove(+id);
  }
}
