const mongoose = require('mongoose');
import { Application } from 'egg';
// import * as mongoose from 'mongoose';

export default (app: Application) => {

    app.beforeStart(() => {
        // 链接mongodb
        // const connect = mongoose.connect('mongodb://localhost:27017/papapa');
        const connect = mongoose.createConnection('mongodb://localhost:27017/papapa');
        connect.on('error', console.error.bind(console, 'connection error:'));
        connect.once('open', () => {
            console.log("Connection Successful!");
        });
        app.mongo_papa = connect;
    });
};
