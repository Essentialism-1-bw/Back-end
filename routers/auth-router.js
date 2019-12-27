const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret.js');
const db = require('./../data/dbConfig.js');
const Users = require('../models/users-model.js');

router.post('/register', (req, res, next) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      next({
        status: 500,
        message: error
      });
    });
});

router.post('/login', (req, res, next) => {
  let { email, password } = req.body;

  Users.getBy({ email })
    .first()
    .then( user => {
      if( user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user);
        res.status(200).json({
          message: `Welcome ${user.firstName}`,
          token: token
        });
      } else {
        next({ status: 401, message: 'Invalid credentials' });
      }
    })
    .catch(error => {
      next({ status: 500, message: error });
    });
});

function genToken(user) {
  const payload = {
    userid: user.id,
  }

  const options = { expiresIn: '4h' };
  const token = jwt.sign(payload, secret.jwtSecret, options);

  return token;
}

module.exports = router;
