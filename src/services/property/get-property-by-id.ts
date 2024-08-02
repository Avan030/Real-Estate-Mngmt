import mongoose from 'mongoose';
import userModel from '@modules/property/schema';
import { IProperty } from '@modules/property/model';

export const getPropertyById = async (id: string): Promise<IProperty | null> => {
  const condition = {
    _id: mongoose.Types.ObjectId(id),
  };

  const productDetails = await userModel.findById(condition);
  return productDetails;
};
