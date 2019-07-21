import MongoDBRepository from '../_SharedClass/MongoDBRepository';
import TextRepository from '../_SharedClass/TextRepository';


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
    

    public getCRUDRepository(repositoryType: string): any{
        if (repositoryType === 'mongo') {
            return MongoDBRepository;
        }

        return TextRepository;
    }
}

export default RepositoryFactory;