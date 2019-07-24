import { Express,  Request, Response } from 'express';
import AuthRepoistory from '../_LocalAuthServices/AuthRepository/Repoistory';
import LocalAuthHelper from '../_LocalAuthServices/LocalAuthHelper/LocalAuthHelper';

interface IOptions {
    repo: AuthRepoistory;
    authHelper: LocalAuthHelper;
}


export default (app:Express, options?:IOptions) => {
    const { repo } = options;
    if (!(repo instanceof AuthRepoistory)) {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m%s\x1b[0m', '[Error]', 'Respository must included');
    }


    app.get('/', async (req: Request, res: Response) => {
    
        res.render('landing/home');
    });

    
}