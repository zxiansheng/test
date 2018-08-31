import { Service } from 'egg';

/**
 * Test Service
 */
export default class Home extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async findUser() {
    const { ctx } = this;
    const one = await ctx.service.model.user.oneUser();
    return one;
  }
}
