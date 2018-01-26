const { graphql, buildSchema } = require('graphql');

const SCHEMA = buildSchema(`
    type Query {
        idUser : String,
        name : String
    }`);

function api() { return graphql(SCHEMA, `{ idUser }` , lookupUser()); }

function lookupUser() {
    // some lookup ...
    return {
        idUser : () => "1",
        name : () => "Sergio"
    }
}

// example query
api().then(r => console.log(r));