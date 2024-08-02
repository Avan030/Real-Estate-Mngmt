import mongoose, { Schema } from 'mongoose';
import { IProperty } from './model';

const propertySchema: Schema = new Schema(
  {
    location: { type: String, required: false, trim: true, },
    price: { type: Number, required: true},
    size: { type: Number, required: true },
    
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IProperty>('property', propertySchema, 'properties');
