export default () => {
  return async function uniteresponse(ctx, next) {
    await next();
    // 只有api请求才封装
    // if (!(ctx.response.header['content-type'] &&
    // ctx.response.header['content-type'].search('application/json') >= 0)) {
    //   return;
    // }
    ctx.body = {
      data: ctx.body,
      ret_code: 0,
      ret_msg: '',
    };
  };
};
