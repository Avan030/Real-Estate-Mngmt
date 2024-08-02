// create saveProductHandeler that will call productService saveProduct, ICreateProductRequest

import { Request, Response } from 'express';
import { propertyService } from '@services/index';
import { ICreatePropertyRequest } from '@modules/property/model';
import { logger } from '@config/logger/logger';

export const savePropertyHandler = async (req: Request, res: Response): Promise<void> => {
  
  try {
    logger.info("title");
    const userDetail = req.userDetails;
    const propertyDetails: ICreatePropertyRequest = {
      location: req.body.location,
      price: req.body.price,
      size:req.body.size
    

  } ;
  //logger.info("title");

    const newProperty = await propertyService.saveProperty(propertyDetails);
    //logger.info("title");

    res.status(201).json(newProperty);
  } catch (error) {
    logger.info("title");
    res.status(500).json({ message: 'Internal server error' });
  }
};