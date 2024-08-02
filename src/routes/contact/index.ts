// craete router useing express router and import contactController and createContact validation

import { Router } from 'express';
import { contactController } from '@controllers/index';
import { contactValidations } from '@validations/contact/index';
import { validateUserAccessToken } from '@middleware/index';

const contactRouter = Router();

contactRouter.post('/contacts', validateUserAccessToken, contactValidations.createContact, contactController.saveContactHandeler);


contactRouter.get('/all', contactController.getAllContact);





export { contactRouter };
