import { Api } from 'express-custom';

import v1 from '@v1/app';

const port = process.env.PORT ?? 5000;

// Create the API instance
const api = new Api({
  url:
    process.env.NODE_ENV === 'prod'
      ? 'https://api.example.com'
      : 'http://localhost:5000',
  port: parseInt(String(port), 10),
});

// Global rate limit
api.setRateLimit({
  windowMs: 5 * 1000, // 5s window
  max: 1, // Limit each IP to x requests per window
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  /**
   * Handler for when the max number of requests per window is exceeded.
   * @param req The request.
   * @param res The response.
   */
  handler: (req, res) => {
    res.status(429).json({
      error: {
        code: 429,
        message: 'Too many requests, please try again later.',
      },
    });
  },
});

api.addVersion(v1);

export default api;
