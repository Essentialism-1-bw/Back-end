const db = require('../data/dbConfig.js');

async function add(project) {
  const [ id ] = await db('users').insert(project);

  return db('projects')
    .where({ id })
    .first();
}

function getAll() {
  return db('projects');
}

function getById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

async function update(project, id) {
  await db('projects')
    .where({ id })
    .update(project);

  return db('projects')
    .where({ id })
    .first();
}

module.exports = {
  add,
  getAll,
  getById,
  remove,
  update
};

