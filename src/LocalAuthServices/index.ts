import { Express } from 'express';
import Controller from './controller';
import Repository from './AuthRepository/Repoistory';

export default (app: Express) => {
    Controller(app, {
        repo: Repository.getInstance()
    })
}