/* eslint-disable no-console */
import mongoose from 'mongoose';
import { IContact } from '@modules/contact/model';
import userModel from '@modules/contact/schema';



export const getAllContacts = async (): Promise<IContact[]> => {
    try {
        const contacts = await userModel.find();
        return contacts;
    } catch (error) {
     console.log('Error in getAllContactsController:', error);

        throw new Error('Error fetching all contacts');
    }
};