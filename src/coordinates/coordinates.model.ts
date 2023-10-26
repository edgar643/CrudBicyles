import * as mongoose from 'mongoose';

export const CoordinatesSchema = new mongoose.Schema({
  id: { type: String, required: true },
  longitud: { type: Number, required: true },
  latitud: { type: Number, required: true },
});

export interface Coordinates extends mongoose.Document {
  id: string;
  longitud: number;
  latitud: number;
}
