import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import { verify, sign } from 'jsonwebtoken';
import ILocalAuthHelper from './ILocalAuthHelper';

class LocalAuthHelper implements ILocalAuthHelper {
    private static instance: LocalAuthHelper;
    private saltRounds:number = 10;
    private salt: string = genSaltSync(this.saltRounds);
    private privateKey = 'Doramon';
    private expiresIn = '10h';

    private constructor() {
        
     }
 
     static getInstance(): LocalAuthHelper{
         if (!LocalAuthHelper.instance) {
            LocalAuthHelper.instance = new LocalAuthHelper();
         }
     
         return LocalAuthHelper.instance;
     }

    hashPassword = (password: string): string => {
        return hashSync(password, this.salt);
    };

    comparePassword = (password: string, hash: string): boolean => {
        return compareSync(password, hash);
    };

    generateToken = (data: any): string => {
        const token = sign({
            data
          }, this.privateKey, { expiresIn: this.expiresIn });

        return token;
    };

    verifyToken = (token: string): any => {
        const decoded = verify(token, this.privateKey);
        return decoded;
    }
}

export default LocalAuthHelper;