/**
 * REFERENCES:
 *  https://scotch.io/@codediger/build-a-simple-graphql-api-server-with-express-and-nodejs
 */
const { 
    graphql, 
    buildSchema, 
    GraphQLObjectType, 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} = require('graphql');
const allUsers = require('./users.json')

/** 
 * ================================
 * SERVER 
 * ================================
 */

// STEP 1 : Define the user schema structure that will be returned by the endpoint (STEP 2)
const userSchema = new GraphQLObjectType({
    name : "userSchema",
    fields : () =>({
        id : { type : new GraphQLNonNull(GraphQLString) },
        name : { type : new GraphQLNonNull(GraphQLString) }
    })
});

// STEP 2: Define the endpoint
const UserQueryRootType = new GraphQLObjectType({
    name : "userRootType",
    fields : () => ({
        'users' : {
            type : new GraphQLList(userSchema),
            description : "LIST OF USERS",
            resolve : () => allUsers
        }
    })
})

const USER_SCHEMA = new GraphQLSchema({ query : UserQueryRootType })

module.exports = USER_SCHEMA;