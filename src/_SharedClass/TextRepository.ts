import CRUDRepository from '../_SharedInterFaces/CRUDRepository'

class Repository implements CRUDRepository {
  

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


export default Repository;