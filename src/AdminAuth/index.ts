import { Express } from 'express';
import Controller from './controller';
import AuthRepoistory from '../_LocalAuthServices/AuthRepository/Repoistory';
import LocalAuthHelper from '../_LocalAuthServices/LocalAuthHelper/LocalAuthHelper'

export default (app: Express) => {
    Controller(app, {
        repo: AuthRepoistory.getInstance(),
        authHelper: LocalAuthHelper.getInstance()
    })
}