import { Express,  Request, Response } from 'express';
import IOptions from './IOptions';

export default (app:Express, options?:IOptions) => {
    const { repo } = options;

    app.get('/api/cats', async (req: Request, res: Response) => {
        const responseData = await repo.search();
        res.json(responseData);
    });

    app.get('/api/cat/:id', async (req: Request, res: Response) => {
        const responseData = await repo.get(req.params.id);
        res.json(responseData);
    });

    app.post('/api/cats', async (req: Request, res: Response) => {
        console.log(req.body);
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