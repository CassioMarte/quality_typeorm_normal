import { Router } from 'express';
import { UserController } from '../controllers/User.Controller';


const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/users', userController.createUserController);
userRoutes.get('/', userController.showUserController)

export { userRoutes };