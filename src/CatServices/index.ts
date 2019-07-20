import { Express,  Request, Response } from 'express';
import IOptions from './IOptions';

export default (app:Express, options?:IOptions) => {
    const { repo } = options;

    app.get('/api/cats', (req: Request, res: Response) => {
        res.send(repo.search());
    });

    app.get('/api/cat/:id', (req: Request, res: Response) => {
        res.send(repo.get(req.params.id))
    });

    app.post('/api/cats', (req: Request, res: Response) => {
        res.send(repo.create('Cats Created!!'));
    });

    app.patch('/api/cat/:id/edit', (req: Request, res: Response) => {
        res.send(repo.update(req.params.id, `cat ${req.params.id} updated!`));
    });

    app.delete('/api/cat/:id/delete', (req: Request, res: Response) => {
        res.send(repo.remove(req.params.id));
    })
}