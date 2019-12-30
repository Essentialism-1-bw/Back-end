
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').delete({})
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        { name: 'Athleticism'},
        { name: 'Art'},
        { name: 'Literature'},
        { name: 'Creativity'},
        { name: 'Independence'},
        { name: 'Kindness & Generosity'},
        { name: 'Spirituality'},
        { name: 'Friends'},
        { name: 'Family'},
        { name: 'Music'},
        { name: 'Community'},
        { name: 'Morals'},
        { name: 'Nature'},
        { name: 'Relationships'},
        { name: 'Sense of Humor'},
        { name: 'Career Success'},
        { name: 'Health'}
      ]);
    });
};
