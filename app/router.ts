import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/template', controller.home.views);
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/redis', app.middleware.uniteresponse(), controller.home.testRedis);
  router.get('/article', controller.article.list);
  router.get('/socket', app.middleware.uniteresponse(), controller.home.socket);
  router.post('/says', controller.home.says);
  router.get('/says', controller.home.says);
  router.get('/chat/with', controller.socket.aService);
};
