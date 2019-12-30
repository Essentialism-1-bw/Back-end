
exports.up = function(knex) {
   return (
     knex.schema.createTable('users', tbl => {
      tbl.increments('id');

      tbl.string('email', 255)
        .notNullable()
        .unique();

      tbl.string('password', 255)
        .notNullable();

      tbl.string('firstName', 255)
        .notNullable();

      tbl.string('lastName', 255)
        .notNullable();

      tbl.date('dateOfBirth')
        .notNullable();

      tbl.string('countryRegion', 255)
        .notNullable();
    })
    .createTable('values', tbl => {
      tbl.increments('id');

      tbl.string('name', 255)
        .notNullable()
        .unique();
    })
    .createTable('users_values', tbl => {
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.integer('value_id')
        .unsigned()
        .notNullable()
        .references('values.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.primary(['user_id', 'value_id']);
    })
    .createTable('reasons', tbl => {
      tbl.increments('id');

      tbl.string('reason', 255)
        .notNullable();

      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .unique();
    })
    .createTable('projects', tbl => {
      tbl.increments('id');

      tbl.string('name', 255)
        .notNullable();

      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
  )
};

exports.down = function(knex) {
  return ( 
    knex.schema
      .dropTableIfExists('projects') 
      .dropTableIfExists('reasons') 
      .dropTableIfExists('users_values') 
      .dropTableIfExists('values') 
      .dropTableIfExists('users')
  )
};
