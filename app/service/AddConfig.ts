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

  /**
   * 顶级职位配置信息
   * @param data - 顶级信息
   */
  public fposition(data) {
    const { ctx } = this;
    const one = ctx.service.model.config.addfPosition(data);
    return one;
  }

  /**
   * 其他职位信息类别
   * @param data - 其他职位分类
   */
  public otherPosition(data) {
    const { ctx } = this;
    const one = ctx.service.model.config.otherPosition(data);
    return one;
  }
}
