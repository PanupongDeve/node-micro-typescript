import { Express,  Request, Response } from 'express';
import CatRepository from './CatRepository';

interface IOptions {
    repo: CatRepository;
}


export default (app:Express, options?:IOptions) => {
    const { repo } = options;
    if (!(repo instanceof CatRepository)) {
        // tslint:disable-next-line: no-console
        console.log('\x1b[31m%s\x1b[0m', '[Error]', 'Respository must included');
    }


    app.get('/api/cats', async (req: Request, res: Response) => {
        repo.seeMaxter();
        const responseData = await repo.search();
        res.json(responseData);
    });

    app.get('/api/cat/:id', async (req: Request, res: Response) => {
        const responseData = await repo.get(req.params.id);
        res.json(responseData);
    });

    app.post('/api/cats', async (req: Request, res: Response) => {
        const responseData = await repo.create(req.body);
        res.json(responseData);
    });

    app.patch('/api/cat/:id/edit', async (req: Request, res: Response) => {
        const responseData = await repo.update(req.params.id, req.body)
        res.json(responseData);
    });

    app.delete('/api/cat/:id/delete', async (req: Request, res: Response) => {
        const responseData = await repo.remove(req.params.id);
        res.json(responseData);
    })
}