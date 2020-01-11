const router  = require('express').Router();
const Values = require('../models/values-model.js');
const authenticate = require('./../auth/authenticate-middleware.js');

router.get('/', async (req, res, next) => {
  try {
    const values = await Values.getAll();

    !values
      ? next({ message: 'Error retrieving values' })
      : res.status(200).json(values);

  } catch(error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const value = await Values.getById(id);

    !value
      ? next({
          status: 404,
          message: 'Error retrieving the value'
        })
      : res.status(200).json(value);
  } catch(error) {
    next(error);
  }
});

router.post('/', authenticate, async (req, res, next) => {
  let value = req.body;

  Values.add(value)
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

router.delete('/:valueid', authenticate, async (req, res, next) => {
  const { valueid } = req.params;

  try {
    const result = await Values.remove(valueid);

    result !== 1
      ? next({
        status: 404,
        message: 'Error deleting the value'
      })
      : res.status(200).json({ message: 'Value successfully deleted'});
  } catch(error) {
    next(error);
  }

});

module.exports = router;
