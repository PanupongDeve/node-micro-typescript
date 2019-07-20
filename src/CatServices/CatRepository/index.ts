import Cat from '../../MongoDB/orm/Cat';

export const search = async () => {

    return await Cat.find();
}

export const get =  async (id: any) => {
    return await Cat.findById(id);
}

export const create = async (data: any) => {
    return await Cat.create(data);
}


export const update = async (id: any, data: any) => {
    return await Cat.findByIdAndUpdate(id, data);
}

export const remove = async (id: any) => {
    return await Cat.findByIdAndRemove(id);
}