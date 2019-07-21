import Cat from '../../_MongoDB/orm/Cat';
import ICustomRepository from './ICustomRepository';
import RepositoryFactory from '../../_SharedFactory/RepositoryFactory';
import CustomRepositoryFactory from './CustomRepositoryFactory/CustomRepositoryFactory';

const repositoryClassFactory = RepositoryFactory.getInstance();
const customRepositoryFactory = CustomRepositoryFactory.getInstance();

// tslint:disable-next-line: variable-name
const CRUDRepository = repositoryClassFactory.getCRUDRepository('mongo');


class Repository extends CRUDRepository implements ICustomRepository{
    private static instance: Repository;

    private constructor(model: any) {
       super(model);
    }

    static getInstance(): Repository{
        if (!Repository.instance) {
            Repository.instance = new Repository(Cat);
        }
    
        return Repository.instance;
    }

    sayHello() {
        const text = customRepositoryFactory.getSayHello('mongo');
        // tslint:disable-next-line: no-console
        console.log(text);
    }
    
}

export default Repository;