import { Controller } from 'egg';
import net from 'net'; // 使用net模块(创建TCP的SOCKET)
const PROT = 8080; // 端口
const SERVER = net.createServer(); // 创建tcp服务器

export default class SocketController extends Controller {
  public async aService() {
    const room = new Array(); // 聊天室的数组
    // const { ctx } = this;
    // on函数作用是监听函数，第一个参数为监听的数据名，第二个是监听到后执行的回调函数
    SERVER.on('connection', (socket) => {
      // 监听connect链接，即当客户端发起链接时，服务器捕获该链接，执行后面的函数
      console.log('new connection' + socket.remoteAddress + ':' + socket.remotePort);

      socket.on('data', (dat) => {
        console.log(1111111, dat, 22222222222);
        // 给socket添加监听事件，即当客户端和服务器链接上后，进行的传输皆用该socket进行传输
        const data = JSON.parse(dat.toString().trim()); // 转成json对象
        // 分别获取data内容
        const from = data.from;
        const to = data.to;
        // const msg = data.msg;
        // 聊天室数据格式
        const  singelRoom = {
          'name1': from,
          'name1S': socket,
          'name2': to,
        };

        // 如果聊天室为空 放入第一个单人聊天室json数据
        if (room.length < 1) {
          room.push(singelRoom);
        }

      });
    });
    SERVER.on('error', (err) => {
      console.log('service error:', err.message);
    });
    SERVER.on('close', () => {
      console.log('service closed');
    });
    SERVER.listen(PROT, '0.0.0.0');
    // ctx.body = {
    //     data: 111,
    // };
    console.log('come on socket');
  }
}
