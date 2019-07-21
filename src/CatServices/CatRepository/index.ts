import Cat from '../../MongoDB/orm/Cat';
import ICatRepository from './ICatRepository';

class CatRepository implements ICatRepository {
    private static instance: CatRepository;

    private constructor() {
    }

    static getInstance(): CatRepository {
        if (!CatRepository.instance) {
            CatRepository.instance = new CatRepository();
        }
    
        return CatRepository.instance;
    }
    
    search = async () => {

        return await Cat.find();
    }

    get = async (id: any) => {
        return await Cat.findById(id);
    }

    create = async (data: any) => {
        return await Cat.create(data);
    }

    update = async (id: any, data: any) => {
        return await Cat.findByIdAndUpdate(id, data);
    }
    
    remove = async (id: any) => {
        return await Cat.findByIdAndRemove(id);
    }
    
}

export default CatRepository;