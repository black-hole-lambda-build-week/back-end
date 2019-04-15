require('dotenv').config();

const pg = require('pg');

pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './users.db3'
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './seeds' }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations'
    },
    seeds: { directory: './seeds' }
  }
};
