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
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      const newUsers = await db('users');
      expect(newUsers).toHaveLength(2);
    });

    it('should return the inserted user', async () => {
      let user = await Users.add({
        id: 1,
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      });

      expect(user.email).toBe('hello@email.com')
      expect(user.countryRegion).toBe('Dubai');
    });

    beforeEach(async () => {
      await db('users').truncate();
    });
  });

  describe('get by', () => {
    it('should return the filtered users', async () => {
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
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      let filteredByEmail = await Users.getBy({ email: 'hello@email.com' });
      let filteredByDOB = await Users.getBy({ dateOfBirth: '1780-10-28' });

      expect(filteredByEmail).toHaveLength(1);
      expect(filteredByDOB).toHaveLength(1);
      
      expect(filteredByEmail[0].firstName).toBe('Hi');
      expect(filteredByDOB[0].lastName).toBe('Vader');
    });

    beforeEach(async () => {
      await db('users').truncate();
    });
  });

  describe('get by id', () => {
    it('should return the user by id', async () => {
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
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      let user1 = await Users.getById(1);
      let user2 = await Users.getById(2);

      expect(user1.countryRegion).toBe('Dubai');
      expect(user1.lastName).toBe('There');
      expect(user2.email).toBe('vader@email.com');
      expect(user2.firstName).toBe('Darth');

    });

    beforeEach(async () => {
      await db('users').truncate();
    });

  });

  describe('get all', () => {
    it('should return all users', async () => {
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
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      const newUsers = await db('users');
      expect(newUsers).toHaveLength(2);
      
    });

    beforeEach(async () => {
      await db('users').truncate();
    });

  });

  describe('remove', () => {
    it('should remove the user from the db', async () => {
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
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      })

      const newUsers = await db('users');
      expect(newUsers).toHaveLength(2);

      await Users.remove(1);
      await Users.remove(2);

      const updatedUsers = await db('users');
      expect(updatedUsers).toHaveLength(0);
    });

    beforeEach(async () => {
      await db('users').truncate();
    });

  });

});
