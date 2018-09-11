// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Article from '../../../app/service/Article';
import Home from '../../../app/service/Home';
import Test from '../../../app/service/Test';
import ModelUser from '../../../app/service/Model/User';

declare module 'egg' {
  interface IService {
    article: Article;
    home: Home;
    test: Test;
    model: {
      user: ModelUser;
    };
  }
}
