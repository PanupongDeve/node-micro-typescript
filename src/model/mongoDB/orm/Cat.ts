import * as mongoose from 'mongoose';
import mongoosePagination from '../plugin/mongoosePagination';

const catSchema = new mongoose.Schema({
    name: String
});

catSchema.plugin(mongoosePagination);

const cat = mongoose.model('Cat', catSchema);

export default cat;