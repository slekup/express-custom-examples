const { Route } = require('express-custom');

const { loginEndpoint } = require('@v1/controllers/user.control');

const authRoute = new Route({
  name: 'User Authentication Endpoints',
  description: 'Endpoints for user authentication',
  path: '/auth',
});

authRoute.addEndpoint(loginEndpoint);

module.exports = authRoute;
