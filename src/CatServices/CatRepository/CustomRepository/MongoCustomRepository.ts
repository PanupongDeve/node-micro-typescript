import ICustomRepository from '../ICustomRepository';

class MongoCustomRepository implements ICustomRepository {

    sayHello() {
        return 'See Hello Form Mongo Repository';
    }
}

export default MongoCustomRepository;