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

server.get('/', (req, res) => {
  res.status(200).json({ api: 'alive' });
});

module.exports = server;
