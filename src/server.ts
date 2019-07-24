import * as express  from 'express';
import Middleware from './_Middleware';
import InstallMongoDB  from './_MongoDB';
import CatServices from './CatServices';
import LocalAuthServices from './_LocalAuthServices';
import Notfound from './_Notfound';
import Homepage from './Homepage';
import { PORT, DB_MONGO } from './config';

const app: express.Express = express();

// plugin - middleware
Middleware(app);

// plugin - Database

InstallMongoDB(DB_MONGO.uri);

// plugin - api
Homepage(app);
LocalAuthServices(app);
CatServices(app);

Notfound(app);
// run
app.listen(PORT, () => {
    // tslint:disable-next-line: no-console
    console.log('\x1b[32m%s\x1b[0m', '[Success]',`server running port ${PORT}`)
})