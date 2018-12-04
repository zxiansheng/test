import { Service } from 'egg';

/**
 * Test Service
 */
export default class AddConfig extends Service {

  /**
   * 行业信息配置
   * @param data - 添加的行业数据
   */
  public industry(data) {
    const { ctx } = this;
    const one = ctx.service.model.config.addIndustry(data);
    return one;
  }
}
