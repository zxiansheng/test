
// socket demo

const net = require('net'); // 使用net模块(创建TCP的SOCKET)
const PROT = 8080; // 端口
const SERVER = net.createServer(); // 创建tcp服务器

// const room = new Array(); // 聊天室的数组
// const { ctx } = this;
// on函数作用是监听函数，第一个参数为监听的数据名，第二个是监听到后执行的回调函数
SERVER.on('connection', (socket) => {
  // 监听connect链接，即当客户端发起链接时，服务器捕获该链接，执行后面的函数
  console.log('new connection' + socket.remoteAddress + ':' + socket.remotePort);
  // 设置你接受的格式
  // socket.setEncoding("utf8");
  // socket.setEncoding("hex"); // 转成二进制的文本编码

  // 接收到客户端的数据，调用这个函数
  // data 默认是Buffer对象，如果你强制设置为utf8,那么底层会先转换成utf8的字符串，传给你      // hex 底层会把这个Buffer对象转成二进制字符串传给你      // 如果你没有设置任何编码 <Buffer 48 65 6c 6c 6f 57 6f 72 6c 64 21>      // utf8 --> HelloWorld!!!   hex--> "48656c6c6f576f726c6421

  socket.on('data', (dat) => {
    console.log('服务端接收到客户端数据，内容为：{'+ dat + '}');
    // 给socket添加监听事件，即当客户端和服务器链接上后，进行的传输皆用该socket进行传输
    // const data = JSON.parse(dat.toString().trim()); // 转成json对象

    // 给客户端返回数据
    socket.write('hi, im service');

  });

  socket.on('close', () => {
    console.log('服务端：客户端断开链接');
  });
});
SERVER.on('error', (err) => {
  console.log('service error:', err.message);
});
SERVER.on('close', () => {
  console.log('service closed');
});
SERVER.listen(PROT, '127.0.0.1'); // 忽略第二个参数,则监听所有ip
// ctx.body = {
//     data: 111,
// };
console.log('come on socket');