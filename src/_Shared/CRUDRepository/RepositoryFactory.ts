import MongoDBCRUDRepository from './Repository/MongoDBCRUDRepository';
import TextCRUDRepository from './Repository/TextCRUDRepository';
import ICRUDRepository from './ICRUDRepository'

class RepositoryFactory {
    private static instance: RepositoryFactory;

    private constructor() {
        
     }

    static getInstance(): RepositoryFactory{
        if (!RepositoryFactory.instance) {
            RepositoryFactory.instance = new RepositoryFactory();
        }

        return RepositoryFactory.instance;
    }
    

    public getCRUDRepository(repositoryType: string, model: any): ICRUDRepository {
        if (repositoryType === 'mongo') {
            return new MongoDBCRUDRepository(model);
        }

        return new TextCRUDRepository();
    }
}

export default RepositoryFactory;