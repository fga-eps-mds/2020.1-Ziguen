import {Router} from 'express';

import authMiddleware from './app/middlewares/auth';
import AdminController from './app/controllers/AdminController';
import SessionController from './app/controllers/SessionController';
import TravelerController from './app/controllers/TravelerController';
import TripController from './app/controllers/TripController';
import PassageController from './app/controllers/PassageController';


import BoatController from './app/controllers/BoatController';


const routes = new Router();

routes.post('/travelers', TravelerController.store);
routes.post('/admins', AdminController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/trav', SessionController.store_trav);
routes.post('/trips', TripController.store);
routes.post('/boats', BoatController.store);
routes.post('/passages', PassageController.store);

routes.get('/admins/list', AdminController.index);
routes.get('/trips', TripController.index);
routes.get('/boats', BoatController.index);
routes.get('/boats/:id', BoatController.descript);

// Todas as rotas a baixo desse middleware tem que ser autenticadas
routes.use(authMiddleware); 

routes.put('/travelers', TravelerController.update);
routes.get('/travelers', TravelerController.index);
routes.get('/travelers/:id', TravelerController.descript);
routes.delete('/travelers', TravelerController.destroy);

routes.put('/admins', AdminController.update);
routes.get('/admins', AdminController.index);
routes.delete('/admins', AdminController.destroy);
routes.get('/admins/:id', AdminController.descript);

routes.put('/trips', TripController.update);
routes.get('/trips', TripController.index);
routes.get('/trips/:id', TripController.descript);
routes.delete('/trips', TripController.destroy);

routes.put('/boats', BoatController.update);
routes.get('/boats/:id', BoatController.descript);
routes.delete('/boats', BoatController.destroy);

routes.get('/passages', PassageController.index);
routes.delete('/passages', PassageController.destroy);
routes.put('/passages', PassageController.update);
routes.get('/passages/:id', PassageController.descript);




export default routes;  