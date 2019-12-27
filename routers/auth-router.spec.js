const router = require('./auth-router.js');
const server = require('../api/server.js');
const db = require('./../data/dbConfig.js');
const request = require('supertest');
const Users = require('../models/users-model.js');

describe('POST /register', () => {
  it('should return the newly registered user', (done) => {
    request(server)
      .post('/api/auth/register')
      .send({
        id: 1,
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      })
      .set('Accept', 'application/json')
      .expect(201)
      .end((err, res) => {
        if(err) return done(err);
        done();
      })
  });

  it('should return a 400 error', (done) => {
    request(server)
      .post('/api/auth/register')
      .send({
        id: 1,
        email: 'hello@email.com',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        if(err) return done(err);
        done();
      });
  });

  beforeEach(async () => {
    await db('users').truncate();
  });
});

describe('POST /api/auth/login', () => {
  it('should return the newly registered user', (done) => {
    request(server)
      .post('/api/auth/login')
      .send({
        id: 1,
        email: 'hello@email.com',
        password: 'asdf',
        firstName: 'Hi',
        lastName: 'There',
        dateOfBirth: '1990-10-28',
        countryRegion: 'Dubai'
      })
      .set('Accept', 'application/json')
      .expect(201)
      .end((err, res) => {
        if(err) return done(err);
        done();
      })
  });

  it('should return 200 status', (done) => {
    request(server)
      .post('/api/auth/login')
      .send({
        email: 'hello@email.com',
        password: 'asdf'
      })
      .set('Accept', 'application/json')
      .expect(200)
  });

  it('should return 401 error', (done) => {
    request(server)
      .post('/api/auth/login')
      .send({
        email: 'hello@email.com',
        password: '????'
      })
      .set('Accept', 'application/json')
      .expect(401)
      .end((err, res) => {
        if(err) return done(err);
        done();
      });
  });
});


