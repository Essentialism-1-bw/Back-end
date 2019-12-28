const router = require('express').Router();
const Users = require('../models/users-model.js');
const Projects = require('../models/projects-model.js');
const Values = require('../models/values-model.js');
const Reasons = require('../models/reasons-model.js');
const bcrypt = require('bcryptjs');

// user endpoints 
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
  const { id } = req.params;

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


router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  try {
    const updatedUser = await Users.update(user, id);

    !updatedUser
      ? next({
          status: 404,
          message: 'Error updating the user'
        })
      : res.status(200).json(updatedUser);
  } catch(error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await Users.remove(id);

    result !== 1
      ? next({
          status: 404,
          message: 'Error deleting the user'
        })
      : res.status(200).json({ message: 'User successfully deleted' });

  } catch (error) {
    next(error);
  }
});

// user reason endpoints

router.get('/:id/reasons', async (req, res, next) => {
  const { id } = req.params;

  try {
    reason = await Reasons.getBy({ user_id: id });

    !reason
      ? next({
        status: 404,
        message: 'Error retrieving the reasons'
      })
      : res.status(200).json(reason);
  } catch(error) {
    next(error);
  }
});

router.post('/:id/reasons', async (req, res, next) => {
  const { id } = req.params;

  let reason = req.body;
  reason.user_id = id;

  try {
    reason = await Reasons.add(reason);

    !reason
      ? next({
        status: 404,
        message: 'Error adding the reasons'
      })
      : res.status(201).json(reason);
  } catch(error) {
    next(error);
  }
});

router.put('/:id/reasons', async (req, res, next) => {
  const { id } = req.params;

  let reason = req.body;
  reason.user_id = id;

  try {
    reason = await Reasons.update(reason, id);

    !reason
      ? next({
        status: 404,
        message: 'Error updating the reasons'
      })
      : res.status(201).json(reason);
  } catch(error) {
    next(error);
  }
});

// user projects endpoints

router.get('/:id/projects', async (req, res, next) => {
  const { id } = req.params;

  try {
    reason = await Projects.getBy({ user_id: id });

    !reason
      ? next({
        status: 404,
        message: 'Error retrieving the reasons'
      })
      : res.status(200).json(reason);
  } catch(error) {
    next(error);
  }
});

router.post('/:id/projects', async (req, res, next) => {
  const { id } = req.params;
  let project = req.body;
  project.user_id = id;

  try {
    project = await Projects.add(project);

    !project
      ? next({
        status: 404,
        message: 'Error adding the project'
      })
      : res.status(201).json(project);
  } catch(error) {
    next(error);
  }
});

router.put('/:id/projects/:projectid', async (req, res, next) => {
  const { id } = req.params;
  const { projectid } = req.params;

  let project = req.body;
  project.user_id = id;

  try {
    reason = await Projects.update(project, projectid);

    !reason
      ? next({
        status: 404,
        message: 'Error updating the project'
      })
      : res.status(201).json(project);
  } catch(error) {
    next(error);
  }
});

router.delete('/:id/projects/:projectid', async (req, res, next) => {
  const { projectid } = req.params;

  try {
    const result = await Projects.remove(projectid);

    result !== 1
      ? next({
        status: 404,
        message: 'Error deleting the project'
      })
      : res.status(200).json({ message: 'Project succesfully deleted'});
  } catch(error) {
    next(error);
  }
});

// user values endpoints
router.get('/:id/values', async (req, res, next) => {
});

module.exports = router;
