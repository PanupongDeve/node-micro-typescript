import * as express  from 'express';
import Middleware from './Middleware';
import InstallMongoDB  from './MongoDB';
import CatServices from './CatServices';
import { PORT, DB_MONGO } from './config';

const app: express.Express = express();

// plugin - middleware
Middleware(app);

// plugin - Database

InstallMongoDB(DB_MONGO.uri);

// plugin - api
CatServices(app)

// run
app.listen(PORT, () => {
    console.log(`server running port ${PORT}`)
})