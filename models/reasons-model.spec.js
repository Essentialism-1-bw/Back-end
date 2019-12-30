const Reasons = require('./reasons-model.js');
const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('reasons model', () => {
  describe('add', () => {
    it('should add the reason into the db', async () => {
      await Users.add({
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      });

      await Users.add({
        email: 'vader@email.com',
        password: 'lightsaber',
        firstName: 'Darth',
        lastName: 'Vader',
        dateOfBirth: '1780-10-28',
        countryRegion: 'Galaxy Far Away'
      });

      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      const newReasons = await db('reasons');
      expect(newReasons).toHaveLength(2);
    });

    beforeEach(async () => {
      await db('reasons').del({});
      await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
    });
  });

  describe('getById', () => {
    it('should return the reason by id', async () => {
      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let reason = await Reasons.getById(1);
      let reason2 = await Reasons.getById(2);

      expect(reason.reason).toBe('Because I want to');
      expect(reason2.reason).toBe('For all the reasons in the world');
    });

    beforeEach(async () => {
      await db('reasons').del({});
      await db.raw('TRUNCATE TABLE reasons RESTART IDENTITY CASCADE');
    });

  })

  describe('getAll', () => {
    it('should return all the reasons', async () => {
      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let reasons = await Reasons.getAll();
      expect(reasons).toHaveLength(2);
    });

    beforeEach(async () => {
      await db('reasons').del({});
    });

  });

  describe('getBy', () => {
    it('should return the reasons by filter', async () => {
      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let user1reasons = await Reasons.getBy({ user_id: 1 });
      let user2reasons = await Reasons.getBy({ user_id: 2 });

      expect(user1reasons).toHaveLength(1);
      expect(user2reasons).toHaveLength(1);

      let reason1 = user1reasons[0];
      let reason2 = user2reasons[0];

      expect(reason1.reason).toBe('Because I want to');
      expect(reason2.reason).toBe('For all the reasons in the world');

    });

    beforeEach(async () => {
      await db('reasons').del({});
    });

  });


  describe('remove', () => {
    it('should remove the reason from the db', async () => {
      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let reasons = await db('reasons');
      expect(reasons).toHaveLength(2);

      await Reasons.remove(1);
      await Reasons.remove(2);

      const updatedReasons = await db('reasons');
      expect(updatedReasons).toHaveLength(0);
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE reasons RESTART IDENTITY CASCADE');
      await db('reasons').del({});
    });

  });

  describe('update', () => {
    it('should update the reason and return the new reason', async () => {
      await Reasons.add({
        reason: 'Because I want to',
        user_id: 1
      });

      const reason = {
        reason: 'This reason has been updated',
        user_id: 1
      };

      const updatedReason = await Reasons.update(reason, 1);

      expect(updatedReason.reason).toBe('This reason has been updated');
    });

    beforeEach(async () => {
      await db('reasons').del({});
    });

  });
});
