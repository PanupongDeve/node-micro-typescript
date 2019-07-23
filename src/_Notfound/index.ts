import { Express } from 'express';
import Controller from './controller';

export default (app: Express) => {
    Controller(app)
}