import { Request } from 'express';
import { EndpointBuilder } from 'express-custom';

interface UserRequest extends Request {
  user: object;
}

export const loginEndpoint = new EndpointBuilder({
  name: 'Login',
  description: 'Login to your account',
  path: '/login',
  method: 'POST',
}).setController((req, res) => {
  res.json({ user: (req as UserRequest).user });
});
