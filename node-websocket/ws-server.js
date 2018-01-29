/**
 * ========= README ==========
 * from: https://github.com/websockets/ws
 * ===========================
 */
var WebSocketServer = require('ws').Server
var WebSocket = require('ws');

const wss = new WebSocketServer({ host:"192.168.1.123", port:"8080" });

wss.on('connection', (client) => {
    console.log('SERVER:: client connected')
    client.on('message', (data) => { 
        wss.clients.forEach((c) => {
            c.send(data);
        });
    });
    client.send('hi! from websocket server!');
});

