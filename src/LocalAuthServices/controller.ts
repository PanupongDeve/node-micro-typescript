import { Express,  Request, Response } from 'express';
import Repoistory from './AuthRepository/Repoistory';
import LocalAuthHelper from './LocalAuthHelper/LocalAuthHelper';

interface IOptions {
    repo: Repoistory;
    authHelper: LocalAuthHelper;
}


export default (app:Express, options?:IOptions) => {
    const { repo } = options;
    if (!(repo instanceof Repoistory)) {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m%s\x1b[0m', '[Error]', 'Respository must included');
    }

    app.get('/api/login', async (req: Request, res: Response) => {
        const responseData = await repo.login('test', '1234');
        // trim value

        // validate data

        // compare password from database

        // encapuslate data to token

        // send token

        // tslint:disable-next-line: no-console
   
        res.json(responseData);
    });

    app.post('/api/register', async (req: Request, res: Response) => {
        const responseData = await repo.register('test', '1234');

        // trim value

        // validate data

        // compare password from database

        // encapuslate data to token

        // send token

        res.json(responseData);
    });

}