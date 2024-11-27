import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {

    constructor(
        private studentService: StudentsService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.studentService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.studentService.findOne(id);
    }

    @Post()
    create(@Body() createStudentDto: CreateStudentDto) {
        return this.studentService.create(createStudentDto, createStudentDto.user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
        return this.studentService.update(id, updateStudentDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.studentService.remove(id);
        }

    @Patch(':id/restore')
        restore(@Param('id') id: string) {
            return this.studentService.restore(id);
        }
}
