import ICRUDRepository from '../ICRUDRepository';

class TextCRUDRepository implements ICRUDRepository {
  
    public search = () => {

        return 'Search Cats'
    }

    public get = (id: any) => {
        return `Hello Cat ${id}`;
    }

    public create =  (data: any) => {
        return `Created Cat Successfully`;
    }

    public update = async (id: any, data: any) => {
        return `Updated Cat Successfully`;
    }
    
    public remove = async (id: any) => {
        return `Removed Cat Successfully`;
    }
}


export default TextCRUDRepository;