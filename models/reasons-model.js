const db = require('../data/dbConfig.js');

async function add(reason) {
  const [ id ] = await db('reasons').insert(reason);

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

function remove(id) {
  return db('reasons')
    .where({ id })
    .del();
}

async function update(reason, id) {
  await db('reasons')
    .where({ id })
    .update(reason);

  return db('reasons')
    .where({ id })
    .first();
}

module.exports = {
  add,
  getAll,
  getById,
  remove,
  update
}
