import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import TravelerController from './app/controllers/TravelerController';



const routes = new Router();

routes.post('/travelers', TravelerController.store);
routes.get('/travelers/list', TravelerController.list);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);


// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/users', authMiddleware, UserController.update);
routes.get('/users/list', authMiddleware, UserController.index);
routes.delete('/users', authMiddleware, UserController.destroy);



export default routes;  