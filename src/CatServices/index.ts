import { Express } from 'express';
import CatController from './controller';
import CatRepository from './CatRepository';

export default (app: Express) => {
    CatController(app, {
        repo: CatRepository.getInstance()
    })
}