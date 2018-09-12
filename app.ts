const mongoose = require('mongoose');
import { Application } from 'egg';
// import * as mongoose from 'mongoose';

export default (app: Application) => {

    app.beforeStart(() => {
        // 链接mongodb
        // const connect = mongoose.connect('mongodb://localhost:27017/papapa');
        const connect = mongoose.createConnection('mongodb://localhost:27017/papapa');
        connect.on('error', (err) => {
            app.getLogger('monggoErrorLogger').info({
                err,
              });
        });
        connect.once('open', () => {
            console.log("Mongoose Connection Successful!");
        });
        app.mongo_papa = connect;

        // @todo 加载多数据库配置
    });
};
