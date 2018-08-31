
import { Service } from 'egg';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export default class User extends Service {

    public async createSchema() {
      const userSchema = new Schema({
        age: String,
        name: String,
        city: String,
        id: String,
        _id: ObjectId,
      });
      // @todo 引入文件,避免每次都new
      return userSchema;
    }
}
