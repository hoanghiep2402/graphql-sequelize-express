const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
       type Query {
            getUserById(id: Int!): User,
            getAllUsers: [User]
       },
   
       type User {
        id: Int!,
        name: String!,
        gender: Gender!,
        age: Int!
      },
  
      enum Gender {
         Male,
         Female   
      },
  

    
    input UserInput{
        name: String!,
        gender: Gender!,
        age: Int!,
    }
    type Count{
        count:Int!
    }
    
    type Mutation {
           createUser(input: UserInput!):User
           updateUser(id: Int!,input: UserInput):User
           deleteUser(id: Int!):Count
       }


`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});


module.exports = {schema};
