var socket;

function connect() {
    socket = new WebSocket('ws://192.168.1.123:8080');
    console.log(socket.readyState);
    socket.addEventListener('open', (event) => {
        console.log('opened');
        socket.send('jaaaaaaaaaaaaaaaaa');
        socket.send('Hello Server!');
    });
    
    socket.onerror = (err) => {console.log(err)};
    socket.addEventListener('message', (event) => {
        document.getElementById('shared').value = event.data;
    });
    document.getElementById('shared').disabled = false;
    document.getElementById('btn-connect').disabled = true;
}

function modify(event) {
    const text = event.target.value;
    socket.send('' + text);
}