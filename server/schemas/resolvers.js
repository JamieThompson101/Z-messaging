const { users, chatRoom } = require('../models');

const resolvers = {
  Query: {
    // Fetch all users
    getAllUsers: async () => {
      try {
        const allUsers = await users.findAll();
        return allUsers;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error(error);
      }
    },
    // Fetch a single user by ID
    getUserById: async (_, { id }) => {
      try {
        const user = await users.findByPk(id);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error(error);
      }
    },
    // Fetch all chat rooms
    getAllChatRooms: async () => {
      try {
        const allChatRooms = await chatRoom.findAll();
        return allChatRooms;
      } catch (error) {
        console.error("Error fetching chat rooms:", error);
        throw new Error(error);
      }
    },
    // Fetch a single chat room by ID
    getChatRoomById: async (_, { id }) => {
      try {
        const room = await chatRoom.findByPk(id);
        if (!room) {
          throw new Error("Chat room not found");
        }
        return room;
      } catch (error) {
        console.error("Error fetching chat room:", error);
        throw new Error(error);
      }
    }
  },
  Mutation: {
    // Create a new user
    createUser: async (_, { userInput }) => {
      try {
        const newUser = await users.create(userInput);
        return newUser;
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error(error);
      }
    },
    // Create a new chat room
    createChatRoom: async (_, { roomInput }) => {
      try {
        const newRoom = await chatRoom.create(roomInput);
        return newRoom;
      } catch (error) {
        console.error("Error creating chat room:", error);
        throw new Error(error);
      }
    }
  }
};

module.exports = resolvers;