const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./complex-server.js');

const PORT = 3000;
const app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: false, //set to false if you don't want graphiql enabled
}));

app.listen(PORT);
console.log('GraphQL API server running at localhost:'+ PORT);