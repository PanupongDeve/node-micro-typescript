export default interface CRUDRepository {
    search(): any;
    get(id: any): any;
    create(data: any): any;
    update(id: any, data: any): any;
    remove(id: any): any;
}
