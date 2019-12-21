
exports.up = function(knex) {
  return knex.schema.createTable('values', values => {
    values.increments();

    values
      .string('name', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('values'); 
};
