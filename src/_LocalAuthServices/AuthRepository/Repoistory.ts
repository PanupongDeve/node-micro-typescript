import CustomRepositoryFactory from './CustomRepositoryFactory/CustomRepositoryFactory';
import ICustomRepository from './ICustomRepository';

const customRepositoryFactory = CustomRepositoryFactory.getInstance();


class Repository implements ICustomRepository {
    private static instance: Repository;
    private customRepository: ICustomRepository ;

    private constructor() {
       this.customRepository = customRepositoryFactory.getCustomRepository('mongo');
    }

    static getInstance(): Repository{
        if (!Repository.instance) {
            Repository.instance = new Repository();
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