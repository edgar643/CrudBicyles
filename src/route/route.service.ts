import { Injectable } from '@nestjs/common';
import { Route, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RouteService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.RouteCreateInput): Promise<Route> {
        return this.prisma.route.create({ data });
    }

    async findAll(): Promise<Route[]> {
        return this.prisma.route.findMany();
    }

    async findOne(id: number): Promise<Route | null> {
        return this.prisma.route.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.RouteUpdateInput): Promise<Route> {
        return this.prisma.route.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Route> {
        return this.prisma.route.delete({
            where: { id },
        });
    }
}
