import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });

const user = mongoose.model('User', userSchema);

export default user;