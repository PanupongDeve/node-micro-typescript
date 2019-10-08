import { Express } from 'express';
import homepageController from './render/homepageController';
import catApiController from './api/catApiController';

export default (app: Express) => {
    homepageController(app);
    catApiController(app);
}