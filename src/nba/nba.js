import Router  from 'express-promise-router';
import {
  getAllGames
} from './controllers';

const routes = Router();

routes.get('/games', getAllGames);

export default routes;
