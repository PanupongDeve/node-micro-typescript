import { Express } from 'express';
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';
import * as cookieParser from 'cookie-parser';
import AuthMidleware from '../_LocalAuthServices/AuthMiddleware/AuthMidleware';

import { rootPath } from '../config';


const expressSanitizer = require('express-sanitizer');
const cookieSession = require('cookie-session');

const authMidleware = AuthMidleware.getInstance();

const day: number = 24 * 60 * 60 * 1000;

export default (app: Express) => {
     // tslint:disable-next-line: no-console
    console.log('\x1b[32m%s\x1b[0m', '[Success]','connect middleware successfully!');
    app.use(cors());
    app.use(helmet());
    app.use(cookieParser());
    app.use(express.static(`${rootPath}/public`));
    app.use(
        cookieSession({
            name: 'session',
            keys: ['cat typing'],
            maxAge: day,
        }),
    );
    app.set('views', `${rootPath}/views`);
    app.set('view engine', 'ejs');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(expressSanitizer());
    app.use(methodOverride('_method'));
    app.use(compression());
    app.use(authMidleware.checkAuth);
}