const { graphql, buildSchema } = require('graphql');
const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./users.json', 'utf8'));

// from: https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6#.9oztv0a7n
const SCHEMA = buildSchema(`

    type User {
        id : String,
        name : String
    }

    type Query {
        users : [User]!
        user(id : String) : User!
    }

`);

// The root provides a resolver function for each API endpoint
const ENDPOINT = {
    // the 'users' endpoint returns all users
    'users': () => users,
    'user' : (args) => {
        return users.filter((user) => {
            return user.id === args['id']
        })[0];
    }
};

function all() { 
    return graphql(SCHEMA, `{ users { id } }`, ENDPOINT); 
}

function single(id) {
    return graphql(SCHEMA, `{ user(id: "${id}") { id } }`, ENDPOINT); 
}

// test api
all().then(r => console.log(r.data.users));
single("1000").then(r => console.log(r.data.user));
single("541")
    .then(r => console.log(r.data.user))
    .catch(err => console.error("user not found :("));