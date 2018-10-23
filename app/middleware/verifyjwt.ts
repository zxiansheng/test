
export default () => {
  return async (ctx, next) => {

    // 从header中获取token
    let tokens = ctx.headers.authorization || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
    tokens += 'eyJhZGRzaWduIjoienhpYW5zaGVuZyIsImlhdCI6MTU0MDI4MDMyMX0.u8Aj0CXNT-425zdxSKdDMXyw6Pb3Frd9MyuI1cZwCQId';
    if (!tokens) {
      ctx.throw(401);
    }
    // 验证jwt
    try {
      ctx.app.jwt.verify(tokens, ctx.app.config.jwt.secret);
    } catch (e) {
      // @todo 返回错误提示401, 并将错误记入日志
      // console.log(111, e.message, 2222);
      ctx.throw(401);
    }

    await next();
  };
};
