import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { FacultyCourseService } from './faculty-course.service';
import { CreateFacultyCourseDto } from './dto/create-faculty-course.dto';
import { UpdateFacultyCourseDto } from './dto/update-faculty-course.dto';

@Controller('faculty-course')
export class FacultyCourseController {
    constructor(
        private facultyCourseService: FacultyCourseService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.facultyCourseService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id,'oipjasdfalsdk;fj;alskdf;kaskdfl;j')
        return this.facultyCourseService.findOne(id);
    }

    @Post()
    create(@Body() createFacultyCourseDto: CreateFacultyCourseDto) {
        return this.facultyCourseService.create(createFacultyCourseDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateFacultyCourseDto: UpdateFacultyCourseDto) {
        return this.facultyCourseService.update(id, updateFacultyCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.facultyCourseService.remove(id);
    }

    @Patch(':id/restore')
    restore(@Param('id') id: string) {
        return this.facultyCourseService.restore(id);
    }
}
