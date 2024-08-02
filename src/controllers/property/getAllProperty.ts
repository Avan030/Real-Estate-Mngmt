import { Request, Response } from 'express';
import {propertyService } from '@services/index';

// Controller to get product by ID
export const getAllProperty = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await propertyService.getAllProperties();
        
        res.json(products);
    } catch (error) {
        //console.log('Error in getAllProductsController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};