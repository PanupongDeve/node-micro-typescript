import Cat from '../../_MongoDB/orm/Cat';
import ICatRepository from './ICatRepository';
import RepositoryFactory from '../../_SharedFactory/RepositoryFactory';

const repositoryClassFactory = new RepositoryFactory();

// tslint:disable-next-line: variable-name
const Repository = repositoryClassFactory.getRepository('mongo');


class CatRepository extends Repository implements ICatRepository {
    private static instance: CatRepository;

    private constructor(model: any) {
       super(model)
    }

    static getInstance(): CatRepository {
        if (!CatRepository.instance) {
            CatRepository.instance = new CatRepository(Cat);
        }
    
        return CatRepository.instance;
    }

    seeMaxter() {
        // tslint:disable-next-line: no-console
        console.log('Hello MaxTer');
    }
    
}

export default CatRepository;