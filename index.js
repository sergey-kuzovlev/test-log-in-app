const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { authStrategy, keystone } = require('./lists');
const { userIsAdmin } = require('./access')


const PROJECT_NAME = 'test-log-in-app';

module.exports = {
  keystone,
  apps: [new GraphQLApp(), 
  new AdminUIApp({ 
    name: PROJECT_NAME, 
    enableDefaultRoute: true, 
    authStrategy,
    isAccessAllowed: userIsAdmin})],
};
