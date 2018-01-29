const express = require('express');
const app = express();
var path = require('path');

app.get('/', (req, resp) => {
    resp.setHeader('Content-Type', 'application/json');
    resp.send({salute : 'hi! from express'});
});

app.get('/html', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80, () => {
    console.log('connected!');
});