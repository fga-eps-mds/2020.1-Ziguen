import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import TravelerController from './app/controllers/TravelerController';



const routes = new Router();

routes.post('/travelers', TravelerController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/trav', SessionController.store_trav);


// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/users', authMiddleware, UserController.update);
routes.put('/travelers', authMiddleware, TravelerController.update);
routes.get('/travelers/list', authMiddleware,TravelerController.list);
routes.get('/users/list', authMiddleware, UserController.index);
routes.delete('/users', authMiddleware, UserController.destroy);



export default routes;  