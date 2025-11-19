import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { DegreesService } from './degrees.service';
import { CreateDegreeDto } from './dto/create-degree.dto';
import { UpdateDegreeDto } from './dto/update-degree.dto';

@Controller('degrees')
export class DegreesController {
    constructor(
        private degreeService: DegreesService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.degreeService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.degreeService.findOne(id);
    }

    @Post()
    create(@Body() createDegreeDto: CreateDegreeDto) {
        return this.degreeService.create(createDegreeDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDegreeDto: UpdateDegreeDto) {
        return this.degreeService.update(id, updateDegreeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.degreeService.remove(id);
    }

    @Patch(':id/restore')
    restore(@Param('id') id: string) {
        return this.degreeService.restore(id);
    }
}
