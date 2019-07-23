import ICustomRepository from '../ICustomRepository';

class TextCustomRepository implements ICustomRepository {

    login(username: string, password: string) {
        return 'Login Form Text Repository';
    }

    register(username: string, password: string) {
        return 'register Form Text Repository';
    }
}

export default TextCustomRepository;