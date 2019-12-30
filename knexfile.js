// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'essentialism'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },

  testing: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'essentialism_test'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }
};
