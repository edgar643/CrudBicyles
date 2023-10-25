import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { EventService } from './event.service';

@Controller('event/')
export class EventController {
    constructor(private eventService: EventService) { }

    @Post()
    async create(@Body() data: Prisma.EventCreateInput): Promise<Event> {
        return this.eventService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Prisma.EventUpdateInput): Promise<Event> {
        return this.eventService.update(+id, data);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Event | null> {
        return this.eventService.findOne(+id);
    }

    @Get()
    async findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<Event> {
        return this.eventService.remove(+id);
    }
}
