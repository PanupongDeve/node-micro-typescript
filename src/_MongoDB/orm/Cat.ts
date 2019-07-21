import * as mongoose from 'mongoose';

const catSchema = new mongoose.Schema({
    name: String
  });

const cat = mongoose.model('Cat', catSchema);

export default cat;