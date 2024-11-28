import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Controller('careers')
export class CareersController {
    constructor(
        private careersService: CareersService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.careersService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.careersService.findOne(id);
    }

    @Post()
    create(@Body() createCareerDto: CreateCareerDto) {
        return this.careersService.create(createCareerDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
        return this.careersService.update(id, updateCareerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.careersService.remove(id);
    }

    @Patch(':id/restore')
    restore(@Param('id') id: string) {
        return this.careersService.restore(id);
    }
}
