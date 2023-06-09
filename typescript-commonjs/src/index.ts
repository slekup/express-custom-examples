const api = require('./api');
const { logger } = require('./utils');

// Start the server
const server = api.start(() => {
  logger.info('Server started at http://localhost:5000');
});

// Handle server errors
server.on('error', (error: string) => {
  logger.error(error);
});
