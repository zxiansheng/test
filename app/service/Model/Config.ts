import { Service } from 'egg';
import _ from 'lodash';

export default class Config extends Service {
  
  // 抓取的行业配置信息,添加数据到industry_config中
  public async addIndustry(data) {
    data = _.trim(data);
    // 将数据插入到数据库中
    //await this.app.mysql.beginTransaction();
    let result = await this.app.mysql.insert('jike_industry_config',
    {
      industry_name: data
    });

    // 修改行业配置编码,用来搜索
    if (result.insertId > 0) {
      let addId = result.insertId;
      let number = _.padStart(addId, 5, '0');
      // 将编号重新更新
      let rows = {
        id: addId,
        industry_number: number,
      };
      await this.app.mysql.update('jike_industry_config', rows);
    }
    //console.log(555, addId, 6666, data, 777);
  }

  // 先插入顶级父类
  public async addfPosition(data) {
    data = _.trim(data);
    let result = await this.app.mysql.insert('jike_position_config',
    {
      type_name: data,
      parent_id: 0,
    });
    if (result.insertId > 0) {
      let addId = result.insertId;
      let number = _.padStart(addId, 4, '0');
      // 将编号重新更新
      let rows = {
        id: addId,
        type_number: number,
      };
      await this.app.mysql.update('jike_position_config', rows);
    }
  }
}
