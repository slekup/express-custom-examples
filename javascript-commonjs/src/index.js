require('module-alias/register');

const api = require('./api');
const { logger } = require('./utils');

// Start the server
const server = api.start(() => {
  logger.info('Server started at http://localhost:5000');
});

// Handle server errors
server.on('error', (error) => {
  logger.error(error);
});
