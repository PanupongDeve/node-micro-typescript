import * as express  from 'express';
import Middleware from './middleware';
import InstallMongoDB  from './model/mongoDB';
import controller from './controller';
import { DB_MONGO } from './config';

const app: express.Express = express();

// plugin - middleware
Middleware(app);

// plugin - Database

InstallMongoDB(DB_MONGO.uri);

// plugin - controller
controller(app);

// run

export default app;
