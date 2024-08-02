import { celebrate, Joi } from 'celebrate';

export const createProperty = celebrate({
  body: Joi.object({
    location: Joi.string().required().trim(),
    price: Joi.number().required(),
    size: Joi.number().required()
    
  }),
});