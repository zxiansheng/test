import { Controller } from 'egg';
import Crawler from 'crawler';

export default class InsectController extends Controller {
  // 爬行业信息
  public async industry() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    let c = new Crawler({
      maxConnections : 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error);
        } else {
          let $ = res.$;
          $(".indcatelist li").each(function(_, a){
              let tt = $(a).text();
              ctx.service.addConfig.industry(tt);
              //console.log(index);
          });

          console.log($("title").text());
        }
        done();
      }
    });

    c.queue(
      "https://bj.58.com/job.shtml?PGTID=0d100000-0000-1de2-1e51-f01677beb8e3&ClickID=6"
    );
    ctx.body = {ret:'ddd'};
  }
  
  // 爬职位分类
  public async position() {
    const { ctx } = this;
    let c = new Crawler({
      maxConnections : 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error);
        } else {
          let $ = res.$;
          // 查找出父级分类id
          $(".jobcatebox tbody tr").each(function(_, th){
            console.log($(th).find('th').html());
          });

          console.log($("title").text());
        }
        done();
      }
    });

    c.queue(
      "https://tj.58.com/job.shtml?PGTID=0d002408-0000-0338-10ec-6a63796dab0d&ClickID=1"
    );
    ctx.body = {ret:'ddd'};
  }
}
