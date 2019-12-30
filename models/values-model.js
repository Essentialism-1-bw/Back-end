const db = require('../data/dbConfig.js');

async function add(value) {
  const [ id ] = await db('values').returning('id').insert(value);

  return db('values')
    .where({ id })
    .first();
}

function getAll() {
  return db('values');
}

function getById(id) {
  return db('values')
    .where({ id })
    .first();
}

function remove(id) {
  return db('values')
    .where({ id })
    .del();
}

module.exports = {
  add,
  getAll,
  getById,
  remove
}
