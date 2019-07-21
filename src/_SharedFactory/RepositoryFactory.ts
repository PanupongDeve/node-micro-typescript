import MongoDBRepository from '../_SharedClass/MongoDBRepository';
import TextRepository from '../_SharedClass/TextRepository';



class RepositoryFactory {
    getRepository(repositoryType: string): any {
        if (repositoryType === 'mongo') {
            return MongoDBRepository;
        }

        return TextRepository;
    }
}

export default RepositoryFactory;