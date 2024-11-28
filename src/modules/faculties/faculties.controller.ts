import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { FacultiesService } from './faculties.service';
import { UpdateFacultyDto } from './dto/update-faculty.dto';

@Controller('faculties')
export class FacultiesController {

    constructor(
        private facultiesService: FacultiesService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.facultiesService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.facultiesService.findOne(id);
    }

    @Post()
    create(@Body() createFacultyDto: CreateFacultyDto) {
        return this.facultiesService.create(createFacultyDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
        return this.facultiesService.update(id, updateFacultyDto);
    }

    @Delete(':id')
        remove(@Param('id') id: string) {
            return this.facultiesService.remove(id);
        }

    @Patch(':id/restore')
        restore(@Param('id') id: string) {
            return this.facultiesService.restore(id);
        }
}
