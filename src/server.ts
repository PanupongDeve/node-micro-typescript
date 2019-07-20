import * as express  from 'express';
import Middleware from './Middleware';
import InstallMongoDB  from './MongoDB';
import CatServices from './CatServices';
import { PORT } from './config';

const app: express.Express = express();

// plugin - middleware
Middleware(app);

// plugin - Database

InstallMongoDB();

// plugin - api
CatServices(app)

// run
app.listen(PORT, () => {
    console.log(`server running port ${PORT}`)
})