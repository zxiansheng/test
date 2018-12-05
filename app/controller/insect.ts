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

  // 爬顶级父类职位
  public async firstposition() {
    const { ctx } = this;
    let c = new Crawler({
      maxConnections : 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error);
        } else {
          let $ = res.$;
          // 获取第一级分类
          $("#sidebar-left li").each(function(_, a){
            let father = $(a).text();
            ctx.service.addConfig.fposition(father);
          });
        }
        done();
      }
    });

    c.queue(
      "https://tj.58.com/job.shtml?PGTID=0d100000-0001-2519-c40c-7b93cd2f5ade&ClickID=2"
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
          let part = $("#sidebar-right ul li");

          // 循环输出二级分类
          part.each(function(_, item) {
            $(item).find('a').each(function(_, a){
              let son = $(a).text();
              ctx.service.addConfig.otherPosition(son);
            });
          });
        }
        done();
      }
    });

    c.queue(
      "https://tj.58.com/job.shtml?PGTID=0d100000-0001-2519-c40c-7b93cd2f5ade&ClickID=2"
    );
    ctx.body = {ret:'ddd'};
  }
}
