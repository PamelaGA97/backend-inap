import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {

    constructor(
        private studentService: StudentsService
    ) {}
/*
    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.studentService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentService.findOne(id);
    }
    */
    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto, createStudentDto.user);
    }
}
