const db = require('../config/connection.js');
const { User } = require('../models/index.js');
const cleanDB = require('./cleanDB.js');

const userData = require('./userSeeds.json');

db.once('open', async () => {
  // await cleanDB('Message', 'messages');
  await cleanDB('User', 'users');

  await User.insertMany(userData) 
  
  console.log('Users seeded!');
  process.exit(0);
});
