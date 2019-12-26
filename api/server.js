const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./../auth/authenticate-middleware.js');
const authRouter = require('./../routers/auth-router.js');
const projectsRouter = require('./../routers/projects-router.js');
const reasonsRouter = require('./../routers/reasons-router.js');
const usersRouter = require('./../routers/users-router.js');
const valuesRouter = require('./../routers/values-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(errorHandler);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'alive' });
});

function errorHandler(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
}

module.exports = server;
