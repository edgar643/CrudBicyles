import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Bicycle, Prisma } from '@prisma/client';
import { BicycleService } from './bicycle.service'

@Controller('bicycle/')
export class BicycleController {
    constructor(private BicycleService: BicycleService) { }

    @Post()
    async create(@Body() data: Prisma.BicycleCreateInput): Promise<Bicycle> {
        return this.BicycleService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Prisma.BicycleUpdateInput): Promise<Bicycle> {
        return this.BicycleService.update(+id, data);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Bicycle | null> {
        return this.BicycleService.findOne(+id);
    }
    @Get()
    async findAll(): Promise<Bicycle[]> {
        return this.BicycleService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<Bicycle> {
        return this.BicycleService.remove(+id);
    }

}
