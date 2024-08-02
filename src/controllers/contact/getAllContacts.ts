/* eslint-disable no-console */
import { Request, Response } from 'express';
import {getAllContacts} from '@services/contact/get-all-contacts';

// Controller to get product by ID
export const getAllContact = async (req: Request, res: Response): Promise<void> => {
    try {
        const contacts = await getAllContacts();
        
        res.json(contacts);
    } catch (error) {
        //console.log('Error in getAllContactsController:', error);
        res.status(500).json({ message: 'Server error' });
    }
};