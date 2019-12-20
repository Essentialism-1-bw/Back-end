const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  describe('index route', () => {
    it('should return an 200 OK status from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.status).toEqual(200);
    });

    it('should return a JSON obj from the index route', async () => {
      const expectedBody = { api: 'alive' };

      const response = await request(server).get('/');

      expect(response.body).toEqual(expectedBody);
    });

    it('should return a JSON obj from the index route', async () => {
      const response = await request(server).get('/');

      expect(response.type).toEqual('application/json');
    });
  });
});
