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
    chatRoom: ID!
  }
  type chatRoom {
    _Id: ID!
    username: String!
    messages: String!
  }
  type Query {
    getAllUsers: [User]
    getMessages: [Message]
    getAllChatRooms: [Chat]
    getMessageById(id: ID!): Message
    getUserById(id: ID!): User
    getChatRoomById(id: ID!): Chat
  }
  type Mutation {
    createUser(name: String!, email: String!): User
    createChatRoom(user: ID!, message: String!): Chat
    createMessage(userId: ID!, message: String!, chatRoom: ID!): Message
}
`;
module.exports = typeDefs;
