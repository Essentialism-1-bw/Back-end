const jwt = require('jsonwebtoken');
const secret = require('../config/secret.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;

  if(token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      if(err ) {
        res.status(401).json({ message: 'Access denied. Please log in.' });
      } else if( +id !== decodedToken.userid && id !== undefined ){
        res.status(401).json({ message: 'Access denied.' });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'Access denied.  Please log in.' });
  }
};
