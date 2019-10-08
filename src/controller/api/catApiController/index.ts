import { Express,  Request, Response } from 'express';
import { CatRepository } from '../../../respository/CatRepository';

const catRepository: CatRepository = CatRepository.getinstance();

export default (app:Express) => {
    app.get('/api/cats', async (req: Request, res: Response) => {
        res.send({ message: catRepository.search() });
    });
 
}