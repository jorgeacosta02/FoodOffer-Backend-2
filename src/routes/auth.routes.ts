import { Router } from 'express';
import userRegisterController from '../controllers/authControllers/userControllers/userRegisterController';
import userLogInController from '../controllers/authControllers/userControllers/userLoginController';
import userLogOutController from '../controllers/authControllers/userControllers/userLogoutController';
import userProfileController from '../controllers/authControllers/userControllers/userProfileController';
import { userAuthRequired } from '../middlewares/userValidate.token'
import consortiumRegisterController from '../controllers/authControllers/consortiumControllers/consortiumRegisterController';
import projectRegisterController from '../controllers/authControllers/projectControllers/projectRegisterController';
import minuteRegisterController from '../controllers/authControllers/minutesContrllers/minuteRegisterController';


const authRoutes = Router();

// UserRoutes
authRoutes.post('/user-register', userRegisterController);
authRoutes.post('/user-login', userLogInController);
authRoutes.post('/user-logout', userLogOutController);
authRoutes.get('/user-profile', userAuthRequired, userProfileController);

// ConsortiumRoutes
authRoutes.post('/consortium-register', consortiumRegisterController);

// ProjectRoutes
authRoutes.post('/project-register', projectRegisterController);

// MinuteRoutes
authRoutes.post('/minute-register', minuteRegisterController);

export default authRoutes