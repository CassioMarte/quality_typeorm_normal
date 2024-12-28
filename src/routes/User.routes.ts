import { Router } from 'express';
import { UserController } from '../controllers/User.Controller';


const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.createUserController);
userRoutes.get('/', userController.showUserController)

export { userRoutes };


import { Router } from 'express';
import { UserController } from '../controllers/User.Controller';

const userRoutes = Router();
const userController = new UserController();

// Usar funções anonimas para garantir o contexto correto
userRoutes.post('/', (req, res) => userController.createUserController(req, res));
userRoutes.get('/', (req, res) => userController.showUserController(req, res));

export default userRoutes;
