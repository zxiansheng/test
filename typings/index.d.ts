import jwt from 'jwt';
import crawler from 'crawler';
import mysql from 'egg-mysql';

declare module 'egg' {
    interface Application {
        mongo_papa: any,
        redis: any,
        jwt: jwt,
        crawler: crawler,
        mysql: mysql,
    };
}