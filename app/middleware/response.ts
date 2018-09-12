export default () => {
  const handle = async (ctx, next) => {
    ctx.body = {
      data: ctx.body,
      ret_code: 0,
      ret_msg: '',
    };

    await next();
  };
  return handle;
};
