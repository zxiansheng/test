import jwt from 'jwt';
import crawler from 'crawler';
import mysql from 'egg-mysql';
import jsdom from 'jsdom';
import cheerio from 'cheerio';

declare module 'egg' {
    interface Application {
        mongo_papa: any,
        redis: any,
        jwt: jwt,
        crawler: crawler,
        mysql: mysql,
        jsdom: jsdom,
        cheerio: cheerio,
    };
}