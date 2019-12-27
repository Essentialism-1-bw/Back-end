const router = require('express').Router();
const Users = require('../models/users-model.js');

router.get('/', async (req, res, next) => {
  try {
    const users = await Users.getAll();

    !users
      ? next({ message: 'Error retrieving the users' })
      : res.status(200).json(users);

  } catch(error) {
    next(error);
  }

});

router.get('/:id', async (req, res, next) => {
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

module.exports = router;
