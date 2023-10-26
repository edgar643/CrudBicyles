import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coordinates } from './coordinates.model';

@Injectable()
export class CoordinatesService {
  constructor(
    @InjectModel('Coordinates') private readonly coordinatesModel: Model<Coordinates>,
  ) {}

  async findAll(): Promise<Coordinates[]> {
    return this.coordinatesModel.find().exec();
  }

  async findOne(id: string): Promise<Coordinates> {
    return this.coordinatesModel.findOne({ id }).exec();
  }

  async create(createCoordinatesDto: Coordinates): Promise<Coordinates> {
    const createdCoordinates = new this.coordinatesModel(createCoordinatesDto);
    return createdCoordinates.save();
  }

  async update(id: string, updateCoordinatesDto: Coordinates): Promise<Coordinates> {
    return this.coordinatesModel.findOneAndUpdate({ id }, updateCoordinatesDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.coordinatesModel.deleteOne({ id }).exec();
  }
}
