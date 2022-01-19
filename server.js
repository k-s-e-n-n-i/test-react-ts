var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws');
//var WebSocketServer = new require('websocket');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({ port: 9001 });
webSocketServer.on('connection', function (ws) {
  var id = Math.random();
  clients[id] = ws;
  console.log(`Новое соединение ${id}`);

  ws.on('message', function (message) {
    console.log(`Получено сообщение: ${message}`);

    const messageToString = JSON.parse(message);
    writeData(messageToString);
    const dataToFront = JSON.stringify(messageToString);

    for (var key in clients) {
      clients[key].send(dataToFront);
    }
  });

  ws.on('close', function () {
    console.log('Соединение закрыто ' + id);
    delete clients[id];
  });
});

// обычный сервер (статика) на порту 8080
/*var fileServer = new Static.Server('.');
http
  .createServer(function (req, res) {
    fileServer.serve(req, res);
  })
  .listen(9000);*/

//--------------------------------------------------------------
const fs = require('fs');

function writeData(postJSON) {
  let getJSON = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  let newJSON = getJSON;

  for (let key in postJSON) {
    if (getJSON[key] === undefined) {
      getJSON[key] = [];
    }
  }

  for (let key in getJSON) {
    if (postJSON[key] != null) {
      newJSON[key] = [].concat(getJSON[key], postJSON[key]);
    }
  }

  fs.writeFileSync('data.json', JSON.stringify(newJSON));

  const json = JSON.parse(fs.readFileSync('data.json', 'utf8'));
  console.log('\n Перезаписан data.json:\n', json);
  return json;
}
