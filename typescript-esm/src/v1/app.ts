import bodyParser from 'body-parser';
import cors from 'cors';
import { Version } from 'express-custom';
import helmet from 'helmet';
import hpp from 'hpp';

import userGroup from './routes';

const version = new Version({
  version: 1,
});

version.addMiddleware((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://example.com');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

version.addMiddleware(helmet());
version.addMiddleware(bodyParser.json({ limit: '100mb' }));
version.addMiddleware(
  bodyParser.urlencoded({ limit: '100mb', extended: true })
);
version.addMiddleware(hpp());

version.addMiddleware(
  cors({
    origin: ['https://example.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

version.addGroup(userGroup);

export default version;
