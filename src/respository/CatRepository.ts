import ICRUDRepository from '../helpers/CRUDRepository/interface/ICRUDRepository'
import TextCRUDRepository from '../helpers/CRUDRepository/TextCRUDRepository';

export class CatRepository implements ICRUDRepository{
    private static instance: CatRepository = new CatRepository();
    private textRepo: ICRUDRepository = new TextCRUDRepository();

    private constructor() {
        

    }

    public static getinstance() {
        return this.instance;
    }

    public search() {
        return this.textRepo.search();
    }

    public get() {

    }

    public create() {

    }

    public update() {

    }

    public remove() {

    }
}