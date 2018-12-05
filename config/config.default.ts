import * as dotenv from 'dotenv';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { get } from 'lodash';
import path from 'path';

dotenv.config();

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;
  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535457581667_3460';

  // add your config here
  config.middleware = [];

  // test
  config.terminal = process.env.TERMINAL;

  // customlogger
  config.customLogger = {
    testLogger: {
      file: path.join(appInfo.root, 'logs/test.log'),
    },
    monggoErrorLogger: {
      file: path.join(appInfo.root, 'logs/mongoerr.log'),
    },
    monggoLogger: {
      file: path.join(appInfo.root, 'logs/mongo.log'),
    },
  };

  // redis
  config.redis = {
    clients: {
      localRedis: {
        port: 6379,
        host: process.env.REDIS_LOCLA_HOST,
        db: 0,
        password: process.env.REDIS_LOCLA_PASSWORD || '',
      },
    },
  };

  // error resopnse
  config.onerror = {
    json: (err, ctx) => {
      ctx.body = {
        code: get(err, 'code', ''),
        message: get(err, 'message', 'unknow'),
        status: get(err, 'status', 0),
        url: get(ctx, 'url', ''),
      };
    },
  };

  // Global middleware
  // config.middleware = [
  //   'uniteresponse',
  // ];

  // view
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(','),
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.ipHeaders = ' x-real-forwarded-for,x-forwarded-for,client-ip ';

  // jwt
  config.jwt = {
    secret: 'zxiansheng',
    expiresIn: process.env.JWT_EXPIRES || '7 days',
    // clockTolerance: process.env.JWT_TOLERANCE || 10,
    // isRevoked: async (ctx, payload) => {
    //     return await ctx.service.common.user.auth.isRevoked(payload.id, ctx.token);
    // },
  };

  // mysql
  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      
      database: 'jike',
    },
    app: true,
    agent: false,
  };

  return config;
};
