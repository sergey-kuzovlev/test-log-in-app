const { Text, Password } = require('@keystonejs/fields');
const { userIsAdmin } = require('../access')

module.exports = {
  fields: {
    email: {
      type: Text,
      isRequired: true,
    },
    passwordHash: {
      type: Password,
      isRequired: true,
    },
    role: {
      type: Text,
      isRequired: true,
    },
  },
  access: {
    read: userIsAdmin,
    update: userIsAdmin,
    create: userIsAdmin,
    delete: userIsAdmin,
  },
};