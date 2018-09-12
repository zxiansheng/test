import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // const response = app.middleware.response;

  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/redis', app.middleware.uniteresponse(), controller.home.testRedis);
  router.get('/article', controller.article.list);
};
