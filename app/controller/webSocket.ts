
const ws = require('nodejs-websocket');
const PORT = 8080;

const WSSERVICE = ws.createServer((conn) => {
  console.log('New connection');
  conn.on('text', (str) => {
    console.log('Recevied' + str);
    conn.sendText(str.toUpperCase() + '!!!');
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
