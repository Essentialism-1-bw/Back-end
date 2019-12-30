
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').delete({})
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Complete an Ironman', user_id: 1},
        {id: 2, name: 'Get a Senior PM Role', user_id: 1},
        {id: 3, name: 'Create a new painting for the city art gallery', user_id: 2},
        {id: 4, name: 'Go on a trip to the Bahamas with family', user_id: 2}
      ]);
    });
};
