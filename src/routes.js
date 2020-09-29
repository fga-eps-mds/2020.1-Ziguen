import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import TravelController from './app/controllers/TravelController';
import Travel from './app/models/Travel';



const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/travels', TravelController.store);
routes.put('/travels', TravelController.update);
routes.get('/travels', TravelController.index);
routes.delete('/travels', TravelController.destroy);



// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/users', UserController.update);
routes.get('/users/list', UserController.index);
routes.delete('/users', UserController.destroy);



export default routes;  