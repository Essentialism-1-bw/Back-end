const db = require('../data/dbConfig.js')

async function add(uservalue) {
  const [ id ] = await db('users_values').insert(uservalue);

  return db('users_values')
    .where({ 'user_id': uservalue.user_id, 'value_id': uservalue.value_id  })
    .first();
}

function get(user_id) {
  return db('users_values')
    .join('users', 'users_values.user_id', 'users.id')
    .join('values', 'users_values.value_id', 'values.id')
    .select(
      'users.id AS user_id',
      'values.id AS value_id',
      'values.name AS value_name'
    )
    .where({ 'users.id': user_id });
}

function remove(user_id, value_id) {
  return db('users_values')
    .where({ 'user_id': user_id, 'value_id': value_id })
    .del();
}

module.exports = {
  add, 
  get,
  remove
}
