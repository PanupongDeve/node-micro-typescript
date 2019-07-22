
export default interface ILocalAuthHelper {
    hashPassword(password: string): string;
    comparePassword(password: string, hash: string): boolean;
    generateToken(data: any): string;
    verifyToken(token: string): any;
}