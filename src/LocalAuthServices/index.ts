import { Express } from 'express';
import Controller from './controller';
import Repository from './AuthRepository/Repoistory';
import LocalAuthHelper from './LocalAuthHelper/LocalAuthHelper';

export default (app: Express) => {
    Controller(app, {
        repo: Repository.getInstance(),
        authHelper: LocalAuthHelper.getInstance()
    })
}