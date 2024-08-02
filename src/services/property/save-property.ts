import { logger } from '@config/logger/logger';
import { ICreatePropertyRequest, IProperty } from '@modules/property/model';
import propertyModel from '@modules/property/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const saveProperty = async (userDetails: ICreatePropertyRequest): Promise<IProperty> => {
  const newProperty: IProperty = new propertyModel({
    location: userDetails.location,
    price: userDetails.price,
    size: userDetails. size,
    
  });

  //logger.info("hi");
  //logger.info(newProperty);
  await newProperty.save();
  //logger.info("hi 2");
  return newProperty;
};
