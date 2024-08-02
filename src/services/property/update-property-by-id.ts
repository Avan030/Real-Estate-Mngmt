
import { IProperty } from '@modules/property/model';
import userModel from '@modules/property/schema';

export const updatePropertyById = async (
   propertyId: string,
    updateData: Partial<IProperty>
): Promise<IProperty | null> => {
    try {
        const updatedProperty = await userModel.findByIdAndUpdate(
           propertyId,
            updateData,
            { new: true }
        );
        return updatedProperty;
    } catch (error) {
        //console.error('Error in updateProductById service:', error);
        throw new Error('Error updating property by ID');
    }
};