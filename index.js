const WebSocket = require('ws');

const ws = new WebSocket('ws://192.168.2.201:81');

ws.on('open', function open() {
  console.log(`[CLIENT] open()`);
  // ws.send('something');
});

ws.on('message', function incoming(data) {
  console.log(data);
});