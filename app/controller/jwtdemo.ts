import { Controller } from 'egg';
import { random } from 'lodash';

export default class JwtDemoController extends Controller {

  // jwt test
  public async jwts() {
    const { ctx } = this;
    ctx.body = {
      data: 'jwt' + random(),
    };
  }

  // create token
  public async getToken() {
    const { ctx, app } = this;
    const token = app.jwt.sign({ addsign: 'zxiansheng' }, app.config.jwt.secret);
    ctx.body = {
      data: 'send token ' + '  ' + token,
    };
  }
}
