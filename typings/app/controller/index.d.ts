// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Article from '../../../app/controller/article';
import Home from '../../../app/controller/home';
import Jwtdemo from '../../../app/controller/jwtdemo';

declare module 'egg' {
  interface IController {
    article: Article;
    home: Home;
    jwtdemo: Jwtdemo;
  }
}
