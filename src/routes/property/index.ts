import { Router } from 'express';
import { propertyController } from '@controllers/index';
import { propertyValidations } from '@validations/property/index';

import { validateUserAccessToken } from '@middleware/index';

const propertyRouter = Router();

propertyRouter.post('/properties', validateUserAccessToken, propertyValidations.createProperty, propertyController.savePropertyHandler);

propertyRouter.get('/properties/:id', validateUserAccessToken, propertyController.getById);

propertyRouter.get('/all', validateUserAccessToken, propertyController.getAllProperty);

propertyRouter.get('/properties/search',validateUserAccessToken,propertyController.searchProperty);
propertyRouter.put('/:id', validateUserAccessToken, propertyController.updatePropertyByIdController);




export { propertyRouter };
