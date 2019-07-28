import ICustomRepository from '../ICustomRepository';
import User from '../../../_MongoDB/orm/User';

class MongoCustomRepository implements ICustomRepository {

    public register = async (username: string, password: string) => {
        const user =  {
            username,
            password
        };
        return await User.create(user);
    }

    public findUserByUsername = async (username: string) => {
        let query = {
            username
        }

        return await User.findOne(query);
    }
}

export default MongoCustomRepository;