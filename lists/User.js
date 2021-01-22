const { Text, Password } = require('@keystonejs/fields');
const { userIsAdmin } = require('../access')

module.exports = {
  fields: {
    email: {
      type: Text,
      isRequired: true,
    },
    passwordHash: {
      label: 'Password',
      type: Password,
      isRequired: true,
    },
    role: {
      type: Text,
      isRequired: true,
    },
  },
  // singular: 'user',
  plural: 'users',
  access: {
    read: userIsAdmin,
    update: userIsAdmin,
    create: userIsAdmin,
    delete: userIsAdmin,
  },
};