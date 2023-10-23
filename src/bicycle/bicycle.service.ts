import { Injectable } from '@nestjs/common';
import { Bicycle, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class BicycleService {
    constructor(private prisma: PrismaService) { }
    async create(data: Prisma.BicycleCreateInput): Promise<Bicycle> {
        return this.prisma.bicycle.create({ data });
    }

    async findAll(): Promise<Bicycle[]> {
        return this.prisma.bicycle.findMany();
    }

    async findOne(id: number): Promise<Bicycle | null> {
        return this.prisma.bicycle.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.BicycleUpdateInput): Promise<Bicycle> {
        return this.prisma.bicycle.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Bicycle> {
        return this.prisma.bicycle.delete({
            where: { id },
        });
    }
}
