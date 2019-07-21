import ICRUDRepository from '../_SharedInterFaces/ICRUDRepository';

export default abstract class  CRUDRepository implements ICRUDRepository {
 
    abstract search(): any;
    abstract get(id: any): any;
    abstract create(data: any): any;
    abstract update(id: any, data: any): any;
    abstract remove(id: any): any;
}