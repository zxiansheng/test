import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
  router.get('/article', controller.article.list);
};
