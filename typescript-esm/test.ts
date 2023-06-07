import { Api, Endpoint, Group, Route } from 'express-custom';

const api = new Api({
  url: 'http://localhost:5000',
  port: 5000,
});

const group = new Group({
  name: 'Test',
  path: '/',
});

const route = new Route({
  name: 'Test',
  description: 'Test route',
  path: '/',
});

const endpoint = new Endpoint({
  name: 'Test',
  description: 'Test endpoint',
  path: '/test',
  method: 'GET',
  controller: (req, res) => {
    console.log('test');
    res.json({
      message: 'Hello world',
    });
  },
}).setParamSchema((schema) =>
  schema.addString({
    name: 'user',
  })
);

route.addEndpoint(endpoint);

group.addRoute(route);

api.addGroup(group);

api.start(() => {
  console.log('server started');
});
