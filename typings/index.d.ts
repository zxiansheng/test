import jwt from 'jwt';

declare module 'egg' {
    interface Application {
        mongo_papa: any,
        redis: any,
        jwt: jwt,
    };
}