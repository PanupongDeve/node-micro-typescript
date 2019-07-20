import { Express } from 'express';
import CatController from './controller';
import * as CatRepository from './CatRepository';

export default (app: Express) => {
    CatController(app, {
        repo: CatRepository
    })
}