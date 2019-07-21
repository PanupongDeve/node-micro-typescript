import { Express } from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
const cookieSession = require('cookie-session');

export default (app: Express) => {
     // tslint:disable-next-line: no-console
    console.log('connect middleware successfully!');
    app.use(cors());
    app.use(helmet());
    app.use(
        cookieSession({
            name: 'session',
            keys: ['cat typing'],
            maxAge: this.day,
        }),
    );
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(compression());
}