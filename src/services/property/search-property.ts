import mongoose from 'mongoose';
import propertyModel from '@modules/property/schema';
import { IProperty } from '@modules/property/model';

export const searchProperties = async (filters: any) => {
  
    const query: any = {};

    if (filters.location) {
      query.location = filters.location as string;
    }
  
    if (filters.price) {
      query.price = filters.price as number;
    }
  
    if (filters.size) {
      query.size = filters.size as number;
    }
    return propertyModel.find(query);
  };