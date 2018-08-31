
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
        id: Date,
        _id: ObjectId,
      });
      return userSchema;
    }
}
