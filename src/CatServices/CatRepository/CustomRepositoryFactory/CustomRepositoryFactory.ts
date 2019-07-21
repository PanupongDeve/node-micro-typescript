import MongoCustomRepository from '../CustomRepository/MongoCustomRepository';
import TextCustomRepository from '../CustomRepository/TextCustomRepository';

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
       


    getSayHello(type: string): any {
        if (type === 'mongo') {
            const mongoCustomRepository = new MongoCustomRepository();
            return mongoCustomRepository.sayHello();
        } else {
            const textCustomRepository = new TextCustomRepository();
            return textCustomRepository.sayHello();
        }
    }
}

export default CustomRepositoryFactory;