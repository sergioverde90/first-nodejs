const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

app.get("/", (request, response) => {
    const files = fs.readdirSync('./posts/');
    files.forEach(f => {
        try {
            const filedata = fs.readFileSync('./posts/'+f,'utf8');
            console.log(filedata);
        } catch(e) {
            console.error("error when reading = ", e);
        }
    })
    response.send(files);
});

app.listen(PORT);
console.log(`server listening on port ${PORT}`)
