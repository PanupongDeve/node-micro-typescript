import ICustomRepository from '../ICustomRepository';

class MongoCustomRepository implements ICustomRepository {

    login(username: string, password: string) {
        return 'Login Form Mongo Repository';
    }

    register(username: string, password: string) {
        return 'register Form Mongo Repository';
    }
}

export default MongoCustomRepository;