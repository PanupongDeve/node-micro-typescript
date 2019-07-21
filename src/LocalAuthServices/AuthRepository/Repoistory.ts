import User from '../../_MongoDB/orm/User';
import RepositoryFactory from '../../_SharedFactory/RepositoryFactory';
import CustomRepositoryFactory from './CustomRepositoryFactory/CustomRepositoryFactory';
import ICustomRepository from './ICustomRepository';

const repositoryClassFactory = RepositoryFactory.getInstance();
const customRepositoryFactory = CustomRepositoryFactory.getInstance();


// tslint:disable-next-line: variable-name
const CRUDRepository = repositoryClassFactory.getCRUDRepository('mongo');


class Repository extends CRUDRepository implements ICustomRepository {
    private static instance: Repository;
    private customRepository: ICustomRepository = customRepositoryFactory.getCustomRepository('mongo');

    private constructor(model: any) {
       super(model);
    }

    static getInstance(): Repository{
        if (!Repository.instance) {
            Repository.instance = new Repository(User);
        }
    
        return Repository.instance;
    }

    public login(username: string, password: string) {
        return this.customRepository.login(username, password)
    }

    public register(username: string, password: string) {
        return this.customRepository.register(username, password);
    }
    
}

export default Repository;