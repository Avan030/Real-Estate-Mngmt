import { ICreateContactRequest, IContact } from '@modules/contact/model';
import contactModel from '@modules/contact/schema';
/**
 * Save new user into db
 * @param userDetails
 */
export const saveContact = async (userDetails: ICreateContactRequest): Promise<IContact> => {
  const newContact: IContact = new contactModel({
    userId: userDetails. userId,
    contactId: userDetails.contactId,
    
  });

  await newContact.save();
  return newContact;
};
