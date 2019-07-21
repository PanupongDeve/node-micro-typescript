import Cat from '../../_MongoDB/orm/Cat';
import ICustomRepository from './ICustomRepository';
import RepositoryFactory from '../../_SharedFactory/RepositoryFactory';

const repositoryClassFactory = new RepositoryFactory();

// tslint:disable-next-line: variable-name
const CRUDRepository = repositoryClassFactory.getCRUDRepository('mongo');


class Repository extends CRUDRepository implements ICustomRepository{
    private static instance: Repository;

    private constructor(model: any) {
       super(model)
    }

    static getInstance(): Repository{
        if (!Repository.instance) {
            Repository.instance = new Repository(Cat);
        }
    
        return Repository.instance;
    }

    seeHello() {
        // tslint:disable-next-line: no-console
        console.log('Hello MaxTer');
    }
    
}

export default Repository;