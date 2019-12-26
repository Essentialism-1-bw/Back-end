const Reasons = require('./reasons-model.js');
//const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('reasons model', () => {
  describe('add', () => {
    it('should add the reason into the db', async () => {
      //await Users.add({
      //  id: 1,
      //  email: 'hello@email.com',
      //  password: 'asdf',
      //  firstName: 'Hi',
      //  lastName: 'There',
      //  dateOfBirth: '1990-10-28',
      //  countryRegion: 'Dubai'
      //})

      //await Users.add({
      //  id: 2,
      //  email: 'vader@email.com',
      //  password: 'lightsaber',
      //  firstName: 'Darth',
      //  lastName: 'Vader',
      //  dateOfBirth: '1780-10-28',
      //  countryRegion: 'Galaxy Far Away'
      //})

      await Reasons.add({
        id: 1,
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        id: 2,
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      const newReasons = await db('reasons');
      expect(newReasons).toHaveLength(2);
    });

    beforeEach(async () => {
      await db('reasons').truncate();
    });
  });

  describe('getById', () => {
    it('should return the reason by id', async () => {
      await Reasons.add({
        id: 1,
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        id: 2,
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let reason = await Reasons.getById(1);
      let reason2 = await Reasons.getById(2);

      expect(reason.reason).toBe('Because I want to');
      expect(reason2.reason).toBe('For all the reasons in the world');
    });

    beforeEach(async () => {
      await db('reasons').truncate();
    });

  })

  describe('getAll', () => {
    it('should return all the reasons', async () => {
      await Reasons.add({
        id: 1,
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        id: 2,
        reason: 'For all the reasons in the world',
        user_id: 2
      });

      let reasons = await Reasons.getAll();

      expect(reasons).toHaveLength(2);

    });

    beforeEach(async () => {
      await db('reasons').truncate();
    });

  });

  describe('remove', () => {
    it('should remove the reason from the db', async () => {
      await Reasons.add({
        id: 1,
        reason: 'Because I want to',
        user_id: 1
      });

      await Reasons.add({
        id: 2,
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
      await db('reasons').truncate();
    });

  });

  describe('update', () => {
    it('should update the reason and return the new reason', async () => {
      await Reasons.add({
        id: 1,
        reason: 'Because I want to',
        user_id: 1
      });

      const updatedReason = await Reasons.update({
        id: 1,
        reason: 'This reason has been updated',
        user_id: 2
      }, 1);

      expect(updatedReason.reason).toBe('This reason has been updated');
      expect(updatedReason.user_id).toBe(2);
    });

    beforeEach(async () => {
      await db('reasons').truncate();
    });

  });
});
