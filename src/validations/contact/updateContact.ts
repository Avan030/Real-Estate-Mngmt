import { celebrate, Joi } from 'celebrate';

export const updateContact = celebrate({
  body: Joi.object({
    userId: Joi.string().required().trim(),
    contactId: Joi.string().required().trim(),
  }),
});