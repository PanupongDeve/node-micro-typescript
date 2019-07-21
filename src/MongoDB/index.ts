import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default (mongoUri) => {
    mongoose.connect(mongoUri, { useNewUrlParser: true },(err: MongoError) => {
        if (err) {
             // tslint:disable-next-line: no-console
            console.log(err);
        } else {
             // tslint:disable-next-line: no-console
            console.log('\x1b[32m%s\x1b[0m', '[Success]','connect database successfully!');
        }
    })
}
