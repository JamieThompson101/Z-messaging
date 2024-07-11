//establishing the express connection and the Apollo server connection
const express = require('express');
//this has been done already
const { ApolloServer } = require('@apollo/server');
//this has been done already in the proper directory
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
//this is good
const { authMiddleware } = require('./utils/auth');
//this is good
const { typeDefs, resolvers } = require('./schemas');
//importing the database connection
const db = require('./config/connection');

//import the mongoose connection

//UPDATE THIS FILE AS WE GO ALONG AND ADD MORE MODELS ETC

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve up static assets
  //app.use('/images', express.static(path.join(__dirname, '../client/src/assets')));

  //app.use('/graphql', expressMiddleware(server, {
   // context: authMiddleware
  //}));

  //if (process.env.NODE_ENV === 'production') {
    //app.use(express.static(path.join(__dirname, '../client/dist')));

    //app.get('*', (req, res) => {
    //  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
   // });
 // }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer();