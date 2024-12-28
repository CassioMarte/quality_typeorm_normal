import { Router } from 'express';
import { UserController } from '../controllers/User.Controller';


const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.createUserController);
userRoutes.get('/', userController.showUserController)

export { userRoutes };