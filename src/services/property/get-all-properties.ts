import mongoose from 'mongoose';
import { IProperty } from '@modules/property/model';
import userModel from '@modules/property/schema';
import { logger } from '@config/logger/logger';



export const getAllProperties = async (): Promise<IProperty[]> => {
    try {
        
        const properties = await userModel.find();
        return properties;
    } catch (error) {
     

        throw new Error('Error fetching all products');
    }
};