import MongoDBCRUDRepository from '../_SharedClass/MongoDBCRUDRepository';
import TextCRUDRepository from '../_SharedClass/TextCRUDRepository';
import ICRUDRepository from '../_SharedInterFaces/ICRUDRepository'

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