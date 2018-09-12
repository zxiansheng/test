import * as dotenv from 'dotenv';

import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

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

  return config;
};
