import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Route, Prisma } from '@prisma/client';
import { RouteService } from './route.service';

@Controller('route/')
export class RouteController {
    constructor(private routeService: RouteService) { }

    @Post()
    async create(@Body() data: Prisma.RouteCreateInput): Promise<Route> {
        return this.routeService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Prisma.RouteUpdateInput): Promise<Route> {
        return this.routeService.update(+id, data);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Route | null> {
        return this.routeService.findOne(+id);
    }

    @Get()
    async findAll(): Promise<Route[]> {
        return this.routeService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<Route> {
        return this.routeService.remove(+id);
    }
}
