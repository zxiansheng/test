import { Controller } from 'egg';

export default class ArticleController extends Controller {

  // 获取所有文章 或指定分类id的文章
  public async list() {
    const { app, ctx } = this;
    const terminal = app.config.terminal;
    const categoryId = ctx.input('catId', 0); //ctx.input('catId', 0);
    const user = await ctx.service.article.findUser();
    ctx.body = {
      terminal,
      categoryId,
      user,
      now: ctx.helper.getNowTime(),
    };
  }
}
