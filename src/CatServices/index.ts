import { Express } from 'express';
import Controller from './controller';
import Repository from './CatRepository/Repoistory';

export default (app: Express) => {
    Controller(app, {
        repo: Repository.getInstance()
    })
}