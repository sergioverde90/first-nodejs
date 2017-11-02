const express = require('express');
const app = express();
const fs = require('fs');
const CONNECTION_HOLDER = require('./modules/postgres-connection');

const PORT = 8080;

// allow load static resources
app.use(express.static('dist'));
// disable http cache 
app.disable('etag');

app.get("/query/entries", function(request, response){
    console.log("querying all entries")
    var sql = 'SELECT id, author, title, d_date, resume from posts order by d_date DESC';
    CONNECTION_HOLDER
        .query(sql, "error occuren when try to obtain all posts")
        .then(res =>  response.send(res.rows));
});

app.get("/query/entries/:id", function(request, response){
    const id = request.params.id;
    console.log(`querying entry with id ${id}`)
    const sql = `SELECT * from posts where id = ${id}`;
    CONNECTION_HOLDER
        .query(sql, `error when try to obtain the post with id ${id}`)
        .then(res => response.send(res.rows[0]));
});

app.listen(PORT);
console.log(`server listening on port ${PORT}`)