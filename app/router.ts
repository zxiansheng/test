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
  router.get('/industry', controller.insect.industry);// 爬行业信息
  router.get('/position', controller.insect.position);// 爬分类信息
  router.get('/firstposition', controller.insect.firstposition);// 爬分类信息
  router.get('/repirePosition', controller.insect.repirePosition);// 修正分类数据
  router.get('/relationPosition', controller.insect.relationPosition);// 修正分类数据
  
  // jwt
  router.get('/jwt', jwt, controller.jwtdemo.jwts);
  router.get('/send/token', controller.jwtdemo.getToken);
};
