const db = require('../data/dbConfig.js');

async function add(project) {
  const [ id ] = await db('projects').insert(project);

  return db('projects')
    .where({ id })
    .first();
}

function getAll() {
  return db('projects');
}

function getBy(filter) {
  return db('projects')
    .where(filter);
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
  getBy,
  remove,
  update
};

