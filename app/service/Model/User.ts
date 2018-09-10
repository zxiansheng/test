import { Service } from 'egg';
const mongoose = require('mongoose');

export default class User extends Service {

  public async oneUser() {
    mongoose.connect('mongodb://localhost:27017/papapa');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log("Connection Successful!");
    });
    // const { ctx } = this;
    const mySchema = require('../../schema/user');   //await ctx.service.schema.user.createSchema();
    const userModle = mongoose.model('User', mySchema, 'user');
    let lets = '';
    lets = userModle.find({}, (err, data) => {
      if (err) {
        console.log(1111111, err.message, 22222);
      } else {
        return data;
      }
    });
    return lets;
  }
}
