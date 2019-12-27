const router  = require('express').Router();
const Values = require('../models/values-model.js');

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

module.exports = router;
