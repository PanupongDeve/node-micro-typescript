import CRUDRepository from '../_SharedInterFaces/CRUDRepository'

class Repository implements CRUDRepository {
    private model: any;

    constructor(model: any) {
        this.model = model
    }

    public search = async () => {

        return await this.model.find();
    }

    public get = async (id: any) => {
        return await this.model.findById(id);
    }

    public create = async (data: any) => {
        return await this.model.create(data);
    }

    public update = async (id: any, data: any) => {
        return await this.model.findByIdAndUpdate(id, data);
    }
    
    public remove = async (id: any) => {
        return await this.model.findByIdAndRemove(id);
    }
}


export default Repository;