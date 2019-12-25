const Values = require('./values-model.js');
const db = require('../data/dbConfig.js');

describe('values model', () => {
  describe('add', () => {
    if('should add the value into the db', async () => {
      await Values.add({
        id: 1,
        name: 'Athleticism'
      })

      await Values.add({
        id: 2,
        name: 'Success'
      })

      await Values.add({
        id: 3,
        name: 'Family'
      })

      const newValues = await db('values');
      expect(newValues).toHaveLength(3);
    });

    it('should return the inserted value', async () => {
      let value = await Values.add({
        id: 1,
        name: 'Athleticism'
      });

      expect(value.name).toBe('Atheleticism');
    });

    beforeEach(async () => {
      await db('values').truncate();
    });
  });

  describe('getAll', () => {
    it('should return all values', async () => {
      await Values.add({
        id: 1,
        name: 'Athleticism'
      })

      await Values.add({
        id: 2,
        name: 'Success'
      })

      let values = await Values.getAll();

      expect(values).toHaveLength(2);
    });

    beforeEach(async () => {
      await db('values').truncate();
    });
  });


  describe('getById', () => {
    it('should return the value by id', async () => {
      await Values.add({
        id: 1,
        name: 'Athleticism'
      })

      await Values.add({
        id: 2,
        name: 'Success'
      })

      let value1 = await Values.getById(1);
      let value2 = await Values.getById(2);

      expect(value1.name).toBe('Athleticism');
      expect(value2.name).toBe('Success');

    });

    beforeEach(async () => {
      await db('values').truncate();
    });
  });

  describe('remove', () => {
    it('should remove the value from the db', async () => {
      await Values.add({
        id: 1,
        name: 'Athleticism'
      })

      await Values.add({
        id: 2,
        name: 'Success'
      })

      const newValues = await db('values');
      expect(newValues).toHaveLength(2);

      await Values.remove(1);
      await Values.remove(2);

      const updatedValues = await db('values');
      expected(updatedValues).toHaveLength(0);

    });

    beforeEach(async () => {
      await db('users').truncate();
    });

  });

});
