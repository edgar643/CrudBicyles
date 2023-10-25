import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Rental, Prisma } from '@prisma/client';
import { RentalService } from './rental.service';

@Controller('rental/')
export class RentalController {
    constructor(private rentalService: RentalService) { }

    @Post()
    async create(@Body() data: Prisma.RentalCreateInput): Promise<Rental> {
        return this.rentalService.create(data);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() data: Prisma.RentalUpdateInput): Promise<Rental> {
        return this.rentalService.update(+id, data);
    }

    @Get('one/:id')
    async findOne(@Param('id') id: number): Promise<Rental | null> {
        return this.rentalService.findOne(+id);
    }

    @Get()
    async findAll(): Promise<Rental[]> {
        return this.rentalService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<Rental> {
        return this.rentalService.remove(+id);
    }

    @Get('available')
    async findAvailableBikes(): Promise<Rental[]> {
        return this.rentalService.findAvailableBikes();
    }
    @Get('occupied')
    async findOccupiedBikes(): Promise<Rental[]> {
        return this.rentalService.findOccupiedBikes();
    }

    @Put('book/:id')
    async bookBike(@Param('id') id: number): Promise<Rental> {
        return this.rentalService.bookBike(+id);
    }

    @Put('checkout/:id')
    async checkOutBike(@Param('id') id: number): Promise<Rental> {
        return this.rentalService.checkOutBike(+id);
    }
}
