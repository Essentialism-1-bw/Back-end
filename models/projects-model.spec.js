const Projects = require('./projects-model.js');
const db = require('../data/dbConfig.js');

describe('projects model', () => {
  describe('add', () => {
    it('should insert the project into the db', async () => {
      await Projects.add({
        id: 1,
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        id: 2,
        name: 'Take over the galaxy',
        user_id: 2
      });

      const newProjects = await db('projects');
      expect(newProjects).toHaveLength(2);
    });

    it('should return the added project', async () => {
      let project = await Projects.add({
        id: 20,
        name: 'Take over the galaxy',
        user_id: 8
      });

      expect(project.name).toBe('Take over the galaxy');
      expect(project.user_id).toBe(8);
    });

    beforeEach(async () => {
      await db('projects').truncate();
    })
  })

  describe('getAll', () => {
    it('should return all projects', async () => {
      await Projects.add({
        id: 1,
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        id: 2,
        name: 'Take over the galaxy',
        user_id: 2
      });

      const newProjects = await db('projects');
      expect(newProjects).toHaveLength(2);
    });

    beforeEach(async () => {
      await db('projects').truncate();
    });
  });

  describe('getById', () => {
    it('should get the project by id', async () => {
      await Projects.add({
        id: 1,
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        id: 2,
        name: 'Take over the galaxy',
        user_id: 2
      });

      let project1 = await Projects.getById(1);
      let project2 = await Projects.getById(2);

      expect(project1.name).toBe('Eat a burger');
      expect(project2.name).toBe('Take over the galaxy');
    });

    beforeEach(async () => {
      await db('projects').truncate();
    });

  });

  describe('remove', () => {
    it('should remove the project from the db', async () => {
      await Projects.add({
        id: 1,
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        id: 2,
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
      await db('projects').truncate();
    });

  });

  describe('update', () => {
    it('should update the project and return the new project info', async () => {
      await Projects.add({
        id: 1,
        name: 'Eat a burger',
        user_id: 1
      });

      await Projects.add({
        id: 2,
        name: 'Take over the galaxy',
        user_id: 2
      });

      const project1 = await Projects.update({
        id: 1,
        name: 'Eat a pizza',
        user_id: 2
      }, 1);

      const project2 = await Projects.update({
        id: 2,
        name: 'Take over the Universe',
        user_id: 1
      }, 2);

      expect(project1.name).toBe('Eat a pizza');
      expect(project1.user_id).toBe(2);
      expect(project2.name).toBe('Take over the Universe');
      expect(project2.user_id).toBe(1);
    });

    beforeEach(async () => {
      await db('projects').truncate();
    });

  });
});
