import * as express  from 'express';
import Middleware from './_Middleware';
import InstallMongoDB  from './_MongoDB';
import CatServices from './CatServices';
import LocalAuthServices from './_LocalAuthServices';
import Notfound from './_Notfound';
import Homepage from './Homepage';
import { DB_MONGO } from './config';

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

export default app;
