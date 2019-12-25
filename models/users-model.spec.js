const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('users model', () => {
  describe('add', () => {
    it('should insert the user into the db', async () => {
      await Users.add({
        id: 1,
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      })
      await Users.add({
        id: 2,
        email: 'luke@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      const newUsers = await db('users');
      expect(newUsers).toHaveLength(2);
  });
});
