import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { contactRouter } from './contact';
import { propertyRouter } from './property';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/contact', contactRouter);

v1Router.use('/property', propertyRouter);
// All routes go here



export { v1Router };
