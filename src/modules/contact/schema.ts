import mongoose, { Schema } from 'mongoose';
import { IContact } from './model';

const contactSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, trim: true },
    contactId: { type: String, required: true, trim: true },
    
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<IContact>('contact', contactSchema, 'contacts');
