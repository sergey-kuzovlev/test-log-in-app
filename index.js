const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const PROJECT_NAME = 'test-log-in-app';
const { authStrategy, keystone } = require('./lists');
const { userTypesEnum } = require('./types');

module.exports = {
  keystone,
  apps: [new GraphQLApp(), 
  new AdminUIApp({ 
    name: PROJECT_NAME, 
    enableDefaultRoute: true, 
    authStrategy,
    isAccessAllowed: ({ 
      authentication: { item: user } }) => !!user && (user.role === userTypesEnum.admin)
    })],
};
