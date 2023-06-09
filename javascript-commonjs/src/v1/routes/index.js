const { Group } = require('express-custom');
const authRoute = require('./auth.api');

const userGroup = new Group({
  name: 'User Endpoints',
  path: '/user',
});

userGroup.addRoute(authRoute);

module.exports = userGroup;
