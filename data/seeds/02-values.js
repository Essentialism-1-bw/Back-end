
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').delete({})
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: 1, name: 'Athleticism'},
        {id: 2, name: 'Art'},
        {id: 3, name: 'Literature'},
        {id: 4, name: 'Creativity'},
        {id: 5, name: 'Independence'},
        {id: 6, name: 'Kindness & Generosity'},
        {id: 7, name: 'Spirituality'},
        {id: 8, name: 'Friends'},
        {id: 9, name: 'Family'},
        {id: 10, name: 'Music'},
        {id: 11, name: 'Community'},
        {id: 12, name: 'Morals'},
        {id: 13, name: 'Nature'},
        {id: 14, name: 'Relationships'},
        {id: 15, name: 'Sense of Humor'},
        {id: 16, name: 'Career Success'},
        {id: 17, name: 'Health'}
      ]);
    });
};
