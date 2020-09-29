import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import BoatController from "./app/controllers/BoatController";
import BoatController from './app/controllers/BoatController';



const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/boats', BoatController.store);
routes.get('/boats/list', BoatController.index);
routes.put('/boats/update', BoatController.update);


// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 
routes.put('/users', authMiddleware, UserController.update);
routes.get('/users/list', authMiddleware, UserController.index);
routes.delete('/users', authMiddleware, UserController.destroy);



export default routes;  