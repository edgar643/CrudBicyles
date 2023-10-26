import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { Coordinates } from './coordinates.model';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @Get()
  async findAll(): Promise<Coordinates[]> {
    return this.coordinatesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Coordinates> {
    return this.coordinatesService.findOne(id);
  }

  @Post()
  async create(@Body() createCoordinatesDto: Coordinates): Promise<Coordinates> {
    return this.coordinatesService.create(createCoordinatesDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoordinatesDto: Coordinates,
  ): Promise<Coordinates> {
    return this.coordinatesService.update(id, updateCoordinatesDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.coordinatesService.delete(id);
  }
}
