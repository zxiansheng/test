
const ws = require('nodejs-websocket');
const PORT = 8080;

const str1 = null;
const str2 = null;
const clientReady = false;
const serverReady = false;
let room = new Array();
const msgArr = new Array();
// @todo 增加多人聊天发送消息
// @todo 增加日志 消息存储到redis中
// @todo 增加权限
const WSSERVICE = ws.createServer((conn) => {
  console.log('New a connection');
  // 定义消息数组
  conn.on('text', (str) => {
    // 心跳检测返回心跳检测的信息
    if (str.indexOf('heartTest') === -1) {
      room.push(conn);
      // 去除重复链接
      room = room.filter((element, index, self) => {
        return self.indexOf(element) === index;
      });
      str = JSON.parse(str);
      const msgs = str.msg;
      const users = '用户' + str.uid + '号说';
      const dataStr = { user: users, msgs };
      const repData = JSON.stringify(dataStr);
      msgArr.push(repData);
      console.log('conn length', room.length, 'aa');
      room.forEach((dat) => {
        dat.sendText(repData);
      });
    } else {
      conn.sendText('heartTest');
    }
  });

  conn.on('close', (code, reason) => {
    console.log('connection closed');
    console.log(code, reason);
  });

  conn.on('error', (err) => {
    console.log('handle err');
    console.log(err);
  });
}).listen(PORT);
console.log('websocket server listening on port ' + PORT);
