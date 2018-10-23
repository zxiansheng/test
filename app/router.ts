import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // const jwt = app.middleware.jwt(app.config.jwt);
  const jwt = app.middleware.verifyjwt();

  router.get('/template', controller.home.views);
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/redis', app.middleware.uniteresponse(), controller.home.testRedis);
  router.get('/article', controller.article.list);
  router.get('/socket', app.middleware.uniteresponse(), controller.home.socket);
  router.post('/says', controller.home.says);
  router.get('/says', controller.home.says);

  // jwt
  router.get('/jwt', jwt, controller.jwtdemo.jwts);
  router.get('/send/token', controller.jwtdemo.getToken);
};
