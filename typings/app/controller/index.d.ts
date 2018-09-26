// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import Article from '../../../app/controller/article';
import Home from '../../../app/controller/home';
import Socket from '../../../app/controller/socket';
import WebSocket from '../../../app/controller/webSocket';

declare module 'egg' {
  interface IController {
    article: Article;
    home: Home;
    socket: Socket;
    webSocket: WebSocket;
  }
}
