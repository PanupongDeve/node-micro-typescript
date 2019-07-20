import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

import { DB_MONGO } from '../config';


export default () => {
    mongoose.connect(DB_MONGO.uri, { useNewUrlParser: true },(err: MongoError) => {
        if (err) {
            console.log(err);
        } else {
            console.log('connect database successfully!');
        }
    })
}
