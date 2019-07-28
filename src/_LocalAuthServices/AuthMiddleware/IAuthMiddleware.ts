import { Request, Response, NextFunction } from 'express';

export default interface IAuthMiddleware {
    checkAuth(req: Request, res: Response, next: NextFunction): Promise<void>
    checkAdmin(redirectURL: string): (req: Request, res: Response, next: NextFunction) => Promise<void>
    checkIsAuthen(redirectURL: string): (req: Request, res: Response, next: NextFunction) => Promise<void>
}