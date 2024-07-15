const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
  }
  type Chat {
    _id: ID!
    user: User!
    message: String!
  }
  type Query {
    users: [User]
    chatRoom: [Chat]
  }
  type Mutation {
    addUser(name: String!, email: String!): User
    addChat(user: ID!, message: String!): Chat
}
`;
module.exports = typeDefs;
