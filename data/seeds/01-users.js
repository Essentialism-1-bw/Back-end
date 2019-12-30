
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').delete()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'john@email.com', password: 'password', firstName: 'John', lastName: 'Galt', dateOfBirth: '1980-12-01', countryRegion: 'United States' },
        { email: 'mary@email.com', password: 'password', firstName: 'Mary', lastName: 'Anne', dateOfBirth: '1982-11-14', countryRegion: 'United States' }
      ]);
    });
};
