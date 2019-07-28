import { Express,  Request, Response } from 'express';
import Repoistory from './AuthRepository/Repoistory';
import LocalAuthHelper from './LocalAuthHelper/LocalAuthHelper';

interface IOptions {
    repo: Repoistory;
    authHelper: LocalAuthHelper;
}


export default (app:Express, options?:IOptions) => {
    const { repo, authHelper } = options;
    if (!(repo instanceof Repoistory)) {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m%s\x1b[0m', '[Error]', 'Respository must included');
    }

    app.post('/api/login', async (req: Request, res: Response) => {
        let {username, password}  = req.body;
        let responseData;
        // trim value
        username = username.trim();
        password = password.trim();

        // validate data

        // compare password from database
        const user = await repo.findUserByUsername(username);
        let checkAuth = authHelper.comparePassword(password, user.password);
        // encapuslate data to token
        if (checkAuth) {
            const responseUser = {
                username: user.username
            }
            const token = authHelper.generateToken(responseUser);
            responseData = {
                data: responseUser,
                token
            }
        } else {
            responseData = {
                data: 'password incorrect',
                token: null
            }
        }
        // send token

        // tslint:disable-next-line: no-console
   
        res.json(responseData);
    });

    app.post('/api/register', async (req: Request, res: Response) => {
        
        let {username, password}  = req.body;
        // trim value
        username = username.trim();
        password = password.trim();
        // validate data

        // encript password

        let hashPassword = authHelper.hashPassword(password);
        const user = await repo.register(username, hashPassword);
        // encapuslate data to token

        const responseUser = {
            username: user.username
        }

        const token = authHelper.generateToken(responseUser);

        // send token

        const responseData = {
            data: responseUser,
            token
        }
        res.json(responseData);
    });

}