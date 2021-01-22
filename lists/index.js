const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { KnexAdapter: Adapter } = require('@keystonejs/adapter-knex');
const UserSchema = require('./User.js');
require('dotenv').config();

const adapterConfig = { knexOptions: { connection: process.env.DB_CONNECTION_STRING } };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('users', UserSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'users',
  config: {
    identityField: 'email',
    secretField: 'passwordHash',
  }
});

module.exports = { authStrategy, keystone }