
const Connection = function() {
    let socket;
    return {
        connect : (url) => {
            this.socket = new WebSocket(url);
            this.socket.addEventListener('open', (event) => { console.log('connection established!'); });
            this.socket.onerror = (err) =>  { console.error("connection error => ", err); };
        },
        disconnect : () => {
            this.socket.close();
        },
        send : (data) => {
            this.socket.send(data);
        },
        test : () => {
            this.socket.send('test connection');
        },
        on : (action, callback) => {
            this.socket.addEventListener(action, callback);
        },
        isConnected : () => {
            return this.socket && this.socket.readyState === 1;
        }
    }
}();

function toogleConnection() {
    if(!Connection.isConnected()) {
        connect();
    } else {
        disconnect();
    }
}

function connect() {
    Connection.connect('ws://192.168.1.123:8080');
    Connection.on('message', (event) => { document.getElementById('shared').value = event.data; })
    document.getElementById('shared').disabled = false;
    document.getElementById('btn-connect').innerHTML = 'Disconnect';
}

function disconnect() {
    Connection.disconnect();
    document.getElementById('shared').disabled = true;
    document.getElementById('shared').value = '';
    document.getElementById('btn-connect').innerHTML = 'Connect';
}

function modify(event) {
    const text = event.target.value;
    Connection.send(text);
}