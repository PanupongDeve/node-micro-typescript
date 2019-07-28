import { Express,  Request, Response } from 'express';
import AuthRepoistory from '../_LocalAuthServices/AuthRepository/Repoistory';
import LocalAuthHelper from '../_LocalAuthServices/LocalAuthHelper/LocalAuthHelper';

interface IOptions {
    repo: AuthRepoistory;
    authHelper: LocalAuthHelper;
}

const scodeServer = 'Admin-secret';

export default (app:Express, options?:IOptions) => {
    const { repo } = options;
    if (!(repo instanceof AuthRepoistory)) {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m%s\x1b[0m', '[Error]', 'Respository must included');
    }


    app.get('/auth/register', async (req: Request, res: Response) => {
        let oldData:any = null;
        res.render('auth/register', {
            oldData,
            csrfToken: null
        });
    });

    app.post('/auth/register', async (req: Request, res: Response) => {
        // 1. revice from data
        let { username, password, passwordConfirm, scode } = req.body;

        username = username.trim();
        password = password.trim();
        passwordConfirm = passwordConfirm.trim();
        scode = scode.trim();

        const oldData = {
            username,
            password,
            passwordConfirm,
            scode,
        };
        // 2. validators
        if (scode !== scodeServer) {
            req.session.oldData = oldData;
            res.redirect('/auth/register');
            return;
        }

        if (password !== passwordConfirm) {
            req.session.oldData = oldData;
            res.redirect('/auth/register');
            return;
        }
        // hashpassword
        // const hashedPassword = authHelper.hashPassword(password);
        const newUser = null;
        // 3. store to database with Repo
        // const newUser = await User.create({
        //     username,
        //     password: hashedPassword,
        // });

        // 4. add to session
        // 5. redirect-> to client
        if (newUser) {
            req.session.user = newUser;
            res.redirect('/admin/dashboard');
        } else {
            req.session.oldData = oldData;
            res.redirect('/auth/register');
        }
    });
}