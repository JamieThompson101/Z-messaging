const typeDefs = `
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
  }
  type Message {
    _id: ID!
    userId: ID!
    message: String!
    username: String!
  }
  type Query {
    getAllUsers: [User]
    getAllMessages: [Message]
    getMessageById(id: ID!): Message
    getUserById(id: ID!): User
  }
  type Mutation {
    createUser(name: String!, email: String!): User
    createMessage(userId: ID!, message: String!, chatRoom: ID!): Message
}
`;
module.exports = typeDefs;
