const express = require('express');
const Users = require('../models/users-model.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res, next) => {
  try {
    const users = await Users.getAll();

    !users
      ? next({ message: 'Error retrieving the users' })
      : res.status(200).json(users);

  } catch(error) {
    next(error);
  }

});

server.get('/:id', async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await Users.getById(id);

    !user
      ? next({
        status: 404,
        message: 'Error retrieving the user'
      })
      : res.status(200).json(user);
    
  } catch(error) {
    next(error);
  }
});

module.exports = server;
