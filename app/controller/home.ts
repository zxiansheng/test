import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async demo() {
    const { app, ctx } = this;
    const terminal = app.config.terminal;
    const desc = 'dddddd';
    const user = await ctx.service.home.findUser();
    ctx.body = {
      terminal,
      desc,
      user,
      test: 'ddddddd',
    };
  }
}
