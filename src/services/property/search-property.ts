import propertyModel from '@modules/property/schema';
import { IProperty } from '@modules/property/model';



export const searchProperties = async (price?: number, size?: number): Promise<IProperty[]> => {
  const query: { price?: number; size?: number } = {};
    if (price) {
      query.price = price;
    }
    if (size) {
      query.size = size;
    }
  const allMusics:IProperty[] = await propertyModel.find(query);
  return allMusics;
};
