const { get } = require('mongoose');
const { User, chatRoom, Message } = require('../models');

const resolvers = {
  Query: {
    // Fetch all users
    getAllUsers: async () => {
      try {
        const allUsers = await User.find();
        return allUsers;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error(error);
      }
    },
    // Fetch a single user by ID
    getUserById: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error(error);
      }
    },

    // Fetch all messages
    getAllMessages: async () => {
      try {
        const allMessages = await Message.find();
        return allMessages;
      } catch (error) {
        console.error("Error fetching messages:", error);
        throw new Error(error);
      }
    },
    // Fetch a single message by ID
    getMessageById: async (_, { id }) => {
      try {
        const message = await Message.findById(id);
        if (!message) {
          throw new Error("Message not found");
        }
        return message;
      } catch (error) {
        console.error("Error fetching message:", error);
        throw new Error(error);
      }
    },
    // Fetch all chat rooms
    getAllChatRooms: async () => {
      try {
        const allChatRooms = await chatRoom.find();
        return allChatRooms;
      } catch (error) {
        console.error("Error fetching chat rooms:", error);
        throw new Error(error);
      }
    },
    // Fetch a single chat room by ID
    getChatRoomById: async (_, { id }) => {
      try {
        const room = await chatRoom.findById(id);
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
    // Create a new message
    createMessage: async (_, { messageInput }) => {
      try {
        const newMessage = await Message.create(messageInput);
        return newMessage;
      } catch (error) {
        console.error("Error creating message:", error);
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