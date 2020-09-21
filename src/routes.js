import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';



const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);


// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/users', authMiddleware, UserController.update);


export default routes;  