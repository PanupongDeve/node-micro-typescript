import * as mongoose from 'mongoose';

const  CatSchema = new mongoose.Schema({
    name: String
  });

const Cat = mongoose.model('Cat', CatSchema);

export default Cat;