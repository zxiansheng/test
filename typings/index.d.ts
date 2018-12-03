import jwt from 'jwt';
import crawler from 'crawler';

declare module 'egg' {
    interface Application {
        mongo_papa: any,
        redis: any,
        jwt: jwt,
        crawler: crawler,
    };
}