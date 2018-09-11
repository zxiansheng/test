const moment = require('moment');

module.exports = {
  // 获取当前时间-年月日模式
  getNowTime(): any {
     return moment().format('YYYY-MM-DD HH:mm:ss');
  }
};
