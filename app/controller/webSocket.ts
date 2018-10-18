
const ws = require('nodejs-websocket');
const PORT = 8080;

const str1 = null;
const str2 = null;
const clientReady = false;
const serverReady = false;
const room = new Array();
const msgArr = new Array();
// @todo 增加多人聊天发送消息
const WSSERVICE = ws.createServer((conn) => {
  console.log('New a connection', 111, conn, 222);
  // 定义消息数组
  conn.on('text', (str) => {
    room.push(conn);
    // 心跳检测返回心跳检测的信息
    if (str.indexOf('heartTest') === -1) {
      str = JSON.parse(str);
      const msgs = str.msg;
      const users = '用户' + str.uid + '号说';
      const dataStr = { user: users, msgs };
      const repData = JSON.stringify(dataStr);
      msgArr.push(repData);
      room.forEach((dat) => {
        dat.sendText(JSON.stringify(msgArr));
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
