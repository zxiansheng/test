// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import AddConfig from '../../../app/service/AddConfig';
import Article from '../../../app/service/Article';
import Home from '../../../app/service/Home';
import Test from '../../../app/service/Test';
import ModelConfig from '../../../app/service/Model/Config';
import ModelUser from '../../../app/service/Model/User';

declare module 'egg' {
  interface IService {
    addConfig: AddConfig;
    article: Article;
    home: Home;
    test: Test;
    model: {
      config: ModelConfig;
      user: ModelUser;
    };
  }
}
