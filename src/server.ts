
import * as express  from 'express';
import Middleware from './Middleware';
import CatServices from './CatServices';
import * as CatRepository from './CatServices/CatRepository';

const app: express.Express = express();

// plugin - middleware
Middleware(app);

// plugin - api
CatServices(app, {
    repo: CatRepository
});


// run
app.listen(3000, () => {
    console.log('server running port 3000')
})