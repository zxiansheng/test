import { Controller } from 'egg';
import Crawler from 'crawler';

export default class InsectController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await ctx.service.test.sayHi('egg');
    let c = new Crawler({
      maxConnections : 10,
      callback: (error, res, done) => {
        if (error) {
          console.log(error);
        } else {
          let $ = res.$;
        
          console.log($(".jobcatebox"));
          console.log($("title").text());
        }
        done();
      }
    });

    c.queue(
      "https://bj.58.com/job.shtml?PGTID=0d100000-0000-1de2-1e51-f01677beb8e3&ClickID=6"
    );
    ctx.body = {aaa:23432};
  }
}
