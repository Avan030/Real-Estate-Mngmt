import { Document, Types } from 'mongoose';

export interface IContact extends Document {
  userId: string;
  contactId: string;
}

export interface ICreateContactRequest {
  userId: string;
  contactId: string;
}

export interface IContactRequestObject {
  userId: string;
  contactId: string;
}
