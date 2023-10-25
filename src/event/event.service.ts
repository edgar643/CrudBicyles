import { Injectable } from '@nestjs/common';
import { Event, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService { 
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.EventCreateInput): Promise<Event> { 
        return this.prisma.event.create({ data });
    }

    async findAll(): Promise<Event[]> { 
        return this.prisma.event.findMany(); 
    }

    async findOne(id: number): Promise<Event | null> { 
        return this.prisma.event.findUnique({ 
            where: { id },
        });
    }

    async update(id: number, data: Prisma.EventUpdateInput): Promise<Event> { 
        return this.prisma.event.update({ 
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Event> { 
        return this.prisma.event.delete({ 
            where: { id },
        });
    }
}
