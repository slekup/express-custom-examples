import dotenv from 'dotenv';

dotenv.config();

import api from './api';
import { logger } from './utils';

const port = process.env.PORT ?? 5000;

// Start the server
const server = api.startServer(() => {
  logger.info(`Server started on port ${port}`);
});

// Handle server errors
server.on('error', (error) => {
  logger.error(error);
});
