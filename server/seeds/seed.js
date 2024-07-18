const db = require('../config/connection.js');
const { User, Message, chatRoom} = require('../models/index.js');
const cleanDB = require('./cleanDB.js');

const userData = require('./userSeeds.json');
const messageData = require('./messageSeeds.json');
const chatData = require('./chatRoomSeeds.json');

db.once('open', async () => {
  await cleanDB('chatRoom', 'chatRooms');
  await cleanDB('Message', 'messages');
  await cleanDB('User', 'users');
 

  await User.insertMany(userData) 
  console.log('Users seeded!');
  await Message.insertMany(messageData)
  console.log('Messages seeded!');
  await chatRoom.insertMany(chatData)
  console.log('Chat Rooms seeded!');
  console.log('All done!');
  
  process.exit(0);
});
