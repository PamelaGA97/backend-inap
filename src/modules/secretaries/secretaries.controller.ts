import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { SecretariesService } from './secretaries.service';
import { CreateSecretaryDto } from './dto/create-secretary.dto';
import { UpdateSecretaryDto } from './dto/update-secretary.dto';

@Controller('secretaries')
export class SecretariesController {
    constructor(
        private secretaryService: SecretariesService
    ) {}

    @Get()
    findAll(@Query() query: Record<string, any>) {
        return this.secretaryService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.secretaryService.findOne(id);
    }

    @Post()
    create(@Body() createSecretaryDto: CreateSecretaryDto) {
        return this.secretaryService.create(createSecretaryDto, createSecretaryDto.user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateSecretaryDto: UpdateSecretaryDto) {
        return this.secretaryService.update(id, updateSecretaryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.secretaryService.remove(id);
        }

    @Patch(':id/restore')
    restore(@Param('id') id: string) {
        return this.secretaryService.restore(id);
    }
}
