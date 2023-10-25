import { Injectable } from '@nestjs/common';
import { Rental, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RentalService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.RentalCreateInput): Promise<Rental> {
        return this.prisma.rental.create({ data });
    }

    async findAll(): Promise<Rental[]> {
        return this.prisma.rental.findMany();
    }


    async findOne(id: number): Promise<Rental | null> {
        return this.prisma.rental.findUnique({
            where: { id },
        });
    }

    async update(id: number, data: Prisma.RentalUpdateInput): Promise<Rental> {
        return this.prisma.rental.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Rental> {
        return this.prisma.rental.delete({
            where: { id },
        });
    }

    async findAvailableBikes(): Promise<Rental[]> {
        return this.prisma.rental.findMany({
            where: {
                status: 'Available'
            }
        });
    }

    async findOccupiedBikes(): Promise<Rental[]> {
        return this.prisma.rental.findMany({
            where: {
                status: 'Occupied'
            }
        });
    }

    async bookBike(id: number): Promise<Rental> {
        return this.prisma.rental.update({
            where: { id },
            data: {
                status: 'Occupied'
            }
        });
    }

    async checkOutBike(id: number): Promise<Rental> {
        return this.prisma.rental.update({
            where: { id },
            data: {
                status: 'Available'
            }
        });
    }

}
