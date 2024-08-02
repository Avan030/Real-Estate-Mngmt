// create celebrate with joi validation for craete product fields name, description, creater

import { celebrate, Joi } from 'celebrate';

export const createContact = celebrate({
  body: Joi.object({
    userId: Joi.string().required().trim(),
    contactId: Joi.string().required().trim(),
  }),
});

// write json input for create product
// {
//   "name": "string",
//   "description": "string"
// }