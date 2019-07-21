import * as express  from 'express';
import CatServices from '../CatServices';
import InstallMongoDB from '../_MongoDB';
import { DB_MONGO } from '../config';

const app: express.Express = express();
InstallMongoDB(DB_MONGO.test_uri);

CatServices(app);

export default app;

