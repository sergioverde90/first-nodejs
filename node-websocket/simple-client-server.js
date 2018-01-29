var WebSocket = require('ws');
var WebSocketServer = require('ws').Server

const wss = new WebSocketServer({ host:"localhost", port:"8080" });

wss.on('connection', (client) => {
    console.log("SERVER: new connection!");
    client.send('Welcome to WebSockets!!');
});

wss.on('message', (data) => {
    console.log(data);
});

const client1 = new WebSocket('ws://localhost:8080');
client1.on('message', (data) => {
    console.error('CLIENT:', data);
});