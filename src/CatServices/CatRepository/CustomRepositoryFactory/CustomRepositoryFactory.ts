import MongoCustomRepository from '../CustomRepository/MongoCustomRepository';
import TextCustomRepository from '../CustomRepository/TextCustomRepository';
import ICustomRepository from '../ICustomRepository';

class CustomRepositoryFactory {
    private static instance: CustomRepositoryFactory;

    private constructor() {
        
     }

    static getInstance(): CustomRepositoryFactory{
        if (!CustomRepositoryFactory.instance) {
            CustomRepositoryFactory.instance = new CustomRepositoryFactory();
        }

        return CustomRepositoryFactory.instance;
    }
       


    getCustomRepository(type: string): ICustomRepository {
        if (type === 'mongo') {
            return new MongoCustomRepository();
        } else {
            return new TextCustomRepository();
        }
    }
}

export default CustomRepositoryFactory;