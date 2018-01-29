const express = require('express');
const app = express();
var path = require('path');

// allow load static resources
app.use(express.static('./'));

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(80, () => {
    console.log('connected!');
});