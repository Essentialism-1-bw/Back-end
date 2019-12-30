const db = require('../data/dbConfig.js');

async function add(reason) {
  const [ id ] = await db('reasons').returning('id').insert(reason);

  return db('reasons')
    .where({ id })
    .first();
}

function getAll() {
  return db('reasons');
}

function getById(id) {
  return db('reasons')
    .where({ id })
    .first();
}

function getBy(filter) {
  return db('reasons')
    .where(filter);
}

function remove(id) {
  return db('reasons')
    .where({ id })
    .del();
}

async function update(reason, user_id) {
  await db('reasons')
    .where({ user_id })
    .update(reason);

  return getBy({ user_id }).first();
}

module.exports = {
  add,
  getAll,
  getById,
  getBy,
  remove,
  update
}
