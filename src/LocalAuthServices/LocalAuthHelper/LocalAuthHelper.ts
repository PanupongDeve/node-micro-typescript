import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import ILocalAuthHelper from './ILocalAuthHelper';

class LocalAuthHelper implements ILocalAuthHelper {
    private static instance: LocalAuthHelper;
    private saltRounds:number = 10;
    private salt: string = genSaltSync(this.saltRounds);

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
}

export default LocalAuthHelper;