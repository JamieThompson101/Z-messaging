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
    getAllUsers: [User]
    getAllChatRooms: [Chat]
    getUserById(id: ID!): User
    getChatRoomById(id: ID!): Chat
  }
  type Mutation {
    createUser(name: String!, email: String!): User
    createChatRoom(user: ID!, message: String!): Chat
}
`;
module.exports = typeDefs;
