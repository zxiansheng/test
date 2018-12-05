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
          let ele = $("#sidebar-left");
          // 获取第一级分类
          ele.each(function(_, li){
            let father = $(li).find('a').text()
            console.log(father);
          
          });
          
          // 获取二级分类
          let part = $("#sidebar-right ul li");
          part.each(function(_, item){
            let second = $(item).find('strong').text();
            console.log('this is 二级分类' + second);

            // 获取三级分类
            let son = $(item).find('a').text();
            console.log('this is 三级分类' + son);
          });
        }
        done();
      }
    });

    c.queue(
      "https://tj.58.com/job.shtml?utm_source=sem-baidu-pc&spm=105916146735.26420796323&PGTID=0d100000-0001-286e-0f49-040309711f91&ClickID=2"
    );
    ctx.body = {ret:'ddd'};
  }
}
