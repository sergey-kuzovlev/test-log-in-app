const { userTypesEnum } = require("./types");

const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.role === userTypesEnum.admin);

module.exports  = { userIsAdmin };