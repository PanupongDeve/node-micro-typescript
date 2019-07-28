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

    public findUserByUsername(username: string) {
        return this.customRepository.findUserByUsername(username);
    }

    public register = async (username: string, password: string) => {
        return await this.customRepository.register(username, password);
    }
    
}

export default Repository;