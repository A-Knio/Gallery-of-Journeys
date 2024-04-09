const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const multer = require('multer');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const upload = multer({ 
  dest: './public/photos',
limits: { fileSize: 100000000 } // Maximum file size in bytes
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: { maxFileSize: 100000000 }
});
const bodyParser = require('body-parser');

// app.use(upload.single('file'));


const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ limit: '10mb', extended: true }));
  app.use(express.json({limit: '10mb', extended: true}));

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
  app.use(bodyParser.json({limit: '10mb', extended: true }));
  app.use(bodyParser.urlencoded({limit: '10mb', extended: true }));

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};


startApolloServer();