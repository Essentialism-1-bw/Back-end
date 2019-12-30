const Projects = require('./projects-model.js');
const Users = require('./users-model.js');
const db = require('../data/dbConfig.js');

describe('projects model', () => {
  describe('add', () => {
    it('should insert the project into the db', async () => {
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

      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });


      const newProjects = await db('projects');
      expect(newProjects).toHaveLength(2);
    });

    it('should return the added project', async () => {
      await Users.add({
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      });

      let project = await Projects.add({
        name: 'Take over the galaxy',
        user_id: 1
      });

      expect(project.name).toBe('Take over the galaxy');
      expect(project.user_id).toBe(1);
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
      await db('projects').del({});
    })
  })

  describe('getAll', () => {
    it('should return all projects', async () => {
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

      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });

      const newProjects = await db('projects');
      expect(newProjects).toHaveLength(2);
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE');
      await db('projects').del({});

    });
  });

  describe('getById', () => {
    it('should get the project by id', async () => {
      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });

      let project1 = await Projects.getById(1);
      let project2 = await Projects.getById(2);

      expect(project1.name).toBe('Eat a burger');
      expect(project2.name).toBe('Take over the galaxy');
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE projects RESTART IDENTITY CASCADE');
      await db('projects').del();
    });

  });

  describe('getBy', () => {
    it('should get the project by filter', async () => {
      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });

      let user1projects = await Projects.getBy({ user_id: 1 });
      let user2projects = await Projects.getBy({ user_id: 2 });

      expect(user1projects).toHaveLength(1);
      expect(user2projects).toHaveLength(1);

      let project1 = user1projects[0];
      let project2 = user2projects[0];

      expect(project1.name).toBe('Eat a burger');
      expect(project2.name).toBe('Take over the galaxy');
    });

    beforeEach(async () => {
      await db('projects').del({});
    });

  });


  describe('remove', () => {
    it('should remove the project from the db', async () => {
      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });

      const newProjects = await db('projects');
      expect(newProjects).toHaveLength(2);

      await Projects.remove(1);
      await Projects.remove(2);
    
      const updatedProjects = await db('projects');
      expect(updatedProjects).toHaveLength(0);
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE projects RESTART IDENTITY CASCADE');
      await db('projects').del({});
    });

  });

  describe('update', () => {
    it('should update the project and return the new project info', async () => {
      await Projects.add({
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        name: 'Take over the galaxy',
        user_id: 2
      });

      const project1 = await Projects.update({
        name: 'Eat a pizza',
        user_id: 1
      }, 1);

      const project2 = await Projects.update({
        name: 'Take over the Universe',
        user_id: 2
      }, 2);

      expect(project1.name).toBe('Eat a pizza');
      expect(project2.name).toBe('Take over the Universe');
    });

    beforeEach(async () => {
      await db.raw('TRUNCATE TABLE projects RESTART IDENTITY CASCADE');
      await db('projects').del({});
    });

  });
});
