import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessorDto } from './dto/create-professor.dto';
import { UpdateProfessorDto } from './dto/update-professor.dto';

@Controller('professors')
export class ProfessorsController {
    constructor(
        private professorsService: ProfessorsService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.professorsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.professorsService.findOne(id);
    }

    @Post()
    create(@Body() createProfssorDto: CreateProfessorDto) {
        console.log(createProfssorDto)
        return this.professorsService.create(createProfssorDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
        return this.professorsService.update(id, updateProfessorDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.professorsService.remove(id);
    }

    @Patch(':id/restore')
    restore(@Param('id') id: string) {
        return this.professorsService.restore(id);
    }
}
