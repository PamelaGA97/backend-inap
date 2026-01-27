import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeacherAvailabilityService } from './teacher-availability.service';
import { CreateTeacherAvailabilityDto } from './dto/create-teacher-availability.dto';
import { UpdateTeacherAvailabilityDto } from './dto/update-teacher-availability.dto';
import { TeacherAvailability } from './entities/teacher-availability.entity';

@Controller('teacher-availability')
export class TeacherAvailabilityController {
  constructor(private teacherAvailabilityService: TeacherAvailabilityService  
  ) {}

  @Post()
  async create(@Body() createTeacherAvailabilityDto: CreateTeacherAvailabilityDto) {
    return await this.teacherAvailabilityService.create(createTeacherAvailabilityDto);
  }

  @Get()
  async findAll(@Query() query: Record<string, any>) {
    return await this.teacherAvailabilityService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TeacherAvailability> {
    return await this.teacherAvailabilityService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTeacherAvailabilityDto: UpdateTeacherAvailabilityDto) {
    return await this.teacherAvailabilityService.update(id, updateTeacherAvailabilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherAvailabilityService.remove(id);
  }
}
