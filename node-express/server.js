const express = require('express');
const app = express();

app.use('/', (req, resp) => {
    resp.setHeader('Content-Type', 'application/json');
    resp.send({salute : 'hi! from express'});
});

app.listen(80, () => {
    console.log('connected!');
});