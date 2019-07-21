import CRUDRepository from '../_SharedInterFaces/CRUDRepository'

class Repository implements CRUDRepository {
    private model: any;

    constructor(model: any) {
        this.model = model
    }

    search = async () => {

        return await this.model.find();
    }

    get = async (id: any) => {
        return await this.model.findById(id);
    }

    create = async (data: any) => {
        return await this.model.create(data);
    }

    update = async (id: any, data: any) => {
        return await this.model.findByIdAndUpdate(id, data);
    }
    
    remove = async (id: any) => {
        return await this.model.findByIdAndRemove(id);
    }
}


export default Repository;