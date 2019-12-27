const jwt = require('jsonwebtoken');
const secret = require('../config/secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if(err) {
         next({
            status: 401,
            message: 'Access denied.  Please log in.'
         });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    next({
      status: 401,
      message: 'Access denied.  Please log in.'
    });
  }
};
