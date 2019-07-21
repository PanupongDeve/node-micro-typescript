import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default (mongoUri) => {
    mongoose.connect(mongoUri, { useNewUrlParser: true },(err: MongoError) => {
        if (err) {
             // tslint:disable-next-line: no-console
            console.log(err);
        } else {
             // tslint:disable-next-line: no-console
            console.log('connect database successfully!');
        }
    })
}
