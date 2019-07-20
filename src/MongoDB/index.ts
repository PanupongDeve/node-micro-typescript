import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default (mongoUri) => {
    mongoose.connect(mongoUri, { useNewUrlParser: true },(err: MongoError) => {
        if (err) {
            console.log(err);
        } else {
            console.log('connect database successfully!');
        }
    })
}
