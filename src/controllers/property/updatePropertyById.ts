import { Request, Response } from 'express';
import {propertyService} from '@services/index';

export const updatePropertyByIdController = async (req: Request, res: Response): Promise<void> => {
    try {
        const propertyId = req.params.id;
        const updateData = req.body;

        const updatedProperty = await propertyService.updatePropertyById(propertyId, updateData);

        if (!updatedProperty) {
            res.status(404).json({ message: 'Property not found' });
            return;
        }

        res.json({ message: 'Property updated successfully', Property: updatedProperty });
    } catch (error) {
        //console.error('Error in updateProductByIdController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};