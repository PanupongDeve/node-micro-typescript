import CRUDRepository from '../_SharedInterFaces/CRUDRepository'

class Repository implements CRUDRepository {
  

    search = () => {

        return 'Search Cats'
    }

    get = (id: any) => {
        return `Hello Cat ${id}`;
    }

    create =  (data: any) => {
        return `Created Cat Successfully`;
    }

    update = async (id: any, data: any) => {
        return `Updated Cat Successfully`;
    }
    
    remove = async (id: any) => {
        return `Removed Cat Successfully`;
    }
}


export default Repository;