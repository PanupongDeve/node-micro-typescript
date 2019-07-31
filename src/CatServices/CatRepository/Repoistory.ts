import Cat from '../../_MongoDB/orm/Cat';
import ICRUDRepository from '../../_Shared/CRUDRepository/ICRUDRepository'
import ICustomRepository from './ICustomRepository';
import RepositoryFactory from '../../_Shared/CRUDRepository/RepositoryFactory';
import CustomRepositoryFactory from './CustomRepositoryFactory/CustomRepositoryFactory';

const repositoryClassFactory = RepositoryFactory.getInstance();
const customRepositoryFactory = CustomRepositoryFactory.getInstance();



class Repository implements ICRUDRepository, ICustomRepository {
    private static instance: Repository;
    // tslint:disable-next-line: variable-name
    private CRUDRepository: ICRUDRepository;
    private customRepository: ICustomRepository;
  
    private constructor(model: any) {

        this.CRUDRepository = repositoryClassFactory.getCRUDRepository('mongo', model);
        this.customRepository = customRepositoryFactory.getCustomRepository('mongo');
    }

    static getInstance(): Repository{
        if (!Repository.instance) {
            Repository.instance = new Repository(Cat);
        }
    
        return Repository.instance;
    }

    search() {
        return this.CRUDRepository.search();
    }

    get(id: any) {
        return this.CRUDRepository.get(id);
    }

    create(data: any) {
        return this.CRUDRepository.create(data);
    }

    update(id: any, data: any) {
        return this.CRUDRepository.update(id, data);
    }

    remove(id: any) {
        return this.CRUDRepository.remove(id);
    }

    sayHello() {
        const text = this.customRepository.sayHello();
        // tslint:disable-next-line: no-console
        console.log(text);
    }
    
}

export default Repository;