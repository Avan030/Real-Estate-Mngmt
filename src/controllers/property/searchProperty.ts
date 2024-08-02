import { Request, Response } from 'express';
import { propertyService } from '@services/index';

// Controller to search properties
export const searchProperty = async (req: Request, res: Response): Promise<void> => {
    try {
      const { price, size } = req.query as { price?: number; size?: number };
      const allMusic = await propertyService.searchProperties(price, size);
      res.status(200).json(allMusic);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
