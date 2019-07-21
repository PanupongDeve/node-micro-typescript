import ICustomRepository from '../ICustomRepository';

class TextCustomRepository implements ICustomRepository {

    sayHello() {
        return 'See Hello Form Text Repository';
    }
}

export default TextCustomRepository;