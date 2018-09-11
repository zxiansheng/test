import { Service } from 'egg';
import { userSchema } from '../../schema/user';
// const mongoose = require('mongoose');

export default class User extends Service {

  public async oneUser() {
    const { app } = this;
    const mongoose = app.mongo_papa;
    const userModle = mongoose.model('User', userSchema, 'user');
    let lets = '';
    lets = userModle.find({name: 'zxiansheng'}, (err, data) => {
      if (err) {
        console.log(1111111, err.message, 22222);
      } else {
        return data;
      }
    });
    return lets;
  }
}
