export default () => {
  return async function uniteresponse(ctx, next) {
    // 获取请求的url,记录请求和响应时间
    const startTime = Date.now();
    await next();
    // 只有api请求才封装
    // if (!(ctx.response.header['content-type'] &&
    // ctx.response.header['content-type'].search('application/json') >= 0)) {
    //   return;
    // }
    // 上报请求时间
    const reportTime = Date.now() - startTime;

    ctx.body = {
      data: ctx.body,
      ret_code: 0,
      ret_msg: '',
      request_time: `${reportTime}ms`,
    };
  };
};
