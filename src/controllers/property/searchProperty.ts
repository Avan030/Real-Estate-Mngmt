import { Request, Response } from 'express';
import { propertyService } from '@services/index';

// Controller to search properties
export const searchProperty = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extract query parameters from req.query
        const filters = req.query;

        // Call the service to search properties with the provided filters
        const properties = await propertyService.searchProperties(filters);

        // Check if properties are found
        if (!properties || properties.length === 0) {
            res.status(404).json({ message: 'No properties found' });
            return;
        }

        // Send the properties as the response
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
