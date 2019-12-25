const db = require('../data/dbConfig.js');

async function add(user) {
  const [ id ] = await db('users').insert(user);

  return db('users')
    .where({ id })
    .first();
}

async function getBy(filter) {
  return db('users')
    .where(filter)
}

async function getById(id) {
}

async function getAll() {
}

async function remove(id) {
}

module.exports = {
  add,
  getBy,
  getById,
  getAll,
  remove
}
