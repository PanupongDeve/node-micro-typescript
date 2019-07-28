import ICustomRepository from '../ICustomRepository';

class TextCustomRepository implements ICustomRepository {

    findUserByUsername(username: string) {
        return 'Login Form Text Repository';
    }

    register(username: string, password: string) {
        return 'register Form Text Repository';
    }
}

export default TextCustomRepository;