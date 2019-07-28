import { Request, Response, NextFunction } from 'express';
import IAuthMiddleware from './IAuthMiddleware';

export default class AuthMiddleware implements IAuthMiddleware {
    private static instance: AuthMiddleware;

    private constructor() {
        
     }

    static getInstance(): AuthMiddleware{
        if (!AuthMiddleware.instance) {
            AuthMiddleware.instance = new AuthMiddleware();
        }

        return AuthMiddleware.instance;
    }


    checkAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        if (req.session.user) {
            res.locals.user = req.session.user;
        } else {
            res.locals.user = false;
        }
    
        next();
    };

    checkAdmin = (redirectURL: string) =>  async (req: Request, res: Response, next: NextFunction) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect(redirectURL);
        }
    }

    checkIsAuthen = (redirectURL: string) =>  async (req: Request, res: Response, next: NextFunction) => {
        if (req.session.user) {
            res.redirect(redirectURL); 
        } else {
            next();
        }
    }
}