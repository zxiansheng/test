export default () => {
  return async function uniteresponse(ctx, next) {
    // 获取请求的url,记录请求和响应时间
    const startTime = Date.now();
    const url = ctx.request.url;
    await next();
    // 只有api请求才封装
    // if (!(ctx.response.header['content-type'] &&
    // ctx.response.header['content-type'].search('application/json') >= 0)) {
    //   return;
    // }
    const reportTime = Date.now() - startTime;
    // @todo 插入数据库,记录响应时间
    ctx.body.retCode = 0;
    ctx.body.ret_msg = '';
    ctx.body.request_time = `${reportTime}ms`;
    ctx.body.url = url;
  };
};
