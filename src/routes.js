import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from "./app/controllers/UserController";
import SessionController from './app/controllers/SessionController';
import TravelerController from './app/controllers/TravelerController';
import TravelController from './app/controllers/TravelController';


import BoatController from './app/controllers/BoatController';


const routes = new Router();

routes.post('/travelers', TravelerController.store);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/trav', SessionController.store_trav);
routes.post('/travels', TravelController.store);
routes.post('/boats', BoatController.store);


// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/travelers', authMiddleware, TravelerController.update);
routes.get('/travelers', authMiddleware,TravelerController.list);
routes.get('/travelers/:id', authMiddleware,TravelerController.descript);
routes.delete('/travelers', TravelerController.destroy);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.destroy);

routes.put('/travels', TravelController.update);
routes.get('/travels', TravelController.index);
routes.delete('/travels', TravelController.destroy);

routes.put('/boats', BoatController.update);
routes.get('/boats', BoatController.index);
routes.delete('/boats', BoatController.destroy);





export default routes;  