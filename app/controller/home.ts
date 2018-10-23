import { Controller } from 'egg';
import { random } from 'lodash';

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
    // add log
    app.getLogger('testLogger').info({
      terminal,
      desc,
      user,
      test: 'ddddddd',
      logname: 'testLogger',
    });
    ctx.body = {
      terminal,
      desc,
      user,
      test: 'ddddddd',
    };
  }

  public async testRedis() {
    const { ctx, app } = this;
    let redisData = await app.redis.get('localRedis').get('test');
    if (!redisData) {
        await app.redis.get('localRedis').set('test', 'dsdsdsd').then(() => {
        return app.redis.get('localRedis').expire('test', 300);
      });
        redisData = 'dsdsdsd';
    }

    ctx.body = {
      data: redisData,
    };
  }

  public async socket() {
    const { ctx } = this;
    ctx.body = {
      data: 111,
    };
  }

  // 加载模板
  public async views() {
    const { ctx } = this;
    await ctx.render('socket');
  }

  // test
  public async says() {
    const { ctx } = this;
    ctx.body = {
      data: 'yaya' + random(),
    };
  }

  // jwt test
  public async jwts() {
    const { ctx } = this;
    ctx.body = {
      data: 'jwt' + random(),
    };
  }
}
