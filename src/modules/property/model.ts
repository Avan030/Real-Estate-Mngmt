import { Document, Types } from 'mongoose';

export interface IProperty extends Document {
  location: string;
  price: number;
  size: number;

}

export interface ICreatePropertyRequest {
  location: string;
  price: number;
  size: number;
}

export interface IPropertyRequestObject {
  location: string;
  price: number;
  size: number;
  _id: Types.ObjectId;
}
