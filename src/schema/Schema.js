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
        age: Int!,
        post:[Post],
      },
  
      enum Gender {
         Male,
         Female   
      },
  
      type Post {
      id: Int!,
      body: String!,
      authorId: Int!,
      totalComment: Int!,
      comment: [Comment]
    },

    type Comment {
      id: Int!,
      body: String!,
      postId: Int,
      authorId: Int,
      archive: Boolean
    } 
    
    input UserInput{
        name: String!,
        gender: Gender!,
        age: Int!,
    }
    type Count{
        count:String!
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
