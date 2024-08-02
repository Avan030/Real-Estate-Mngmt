// create saveContactHandeler that will call ContactService saveContact, ICreateContactRequest

import { Request, Response } from 'express';
import { contactService } from '@services/index';
import { ICreateContactRequest } from '@modules/contact/model';

export const saveContactHandeler = async (req: Request, res: Response): Promise<void> => {
  const userDetails = req.userDetails;
    const contactDetails: ICreateContactRequest = {
      userId: req.body. userId,
      contactId: req.body. contactId,
 
  } ;
  try {
    const newContact = await contactService.saveContact(contactDetails);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};