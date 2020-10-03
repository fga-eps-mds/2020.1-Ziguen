import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import TravelerController from './app/controllers/TravelerController';
import TravelController from './app/controllers/TravelController';

const routes = new Router();

routes.post('/travelers', TravelerController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/trav', SessionController.store_trav);
routes.post('/travels', TravelController.store);
routes.put('/travels', TravelController.update);
routes.get('/travels', TravelController.index);
routes.delete('/travels', TravelController.destroy);



// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/users', authMiddleware, UserController.update);
routes.put('/travelers/update', authMiddleware, TravelerController.update);
routes.get('/travelers/list', authMiddleware,TravelerController.list);
routes.get('/travelers/list/:id', authMiddleware,TravelerController.descript);
routes.get('/users/list', authMiddleware, UserController.index);
routes.delete('/users', authMiddleware, UserController.destroy);
routes.delete('/travelers', TravelerController.destroy);
routes.put('/users', UserController.update);
routes.get('/users/list', UserController.index);
routes.delete('/users', UserController.destroy);



export default routes;  