import { Request } from 'express';
import { Endpoint } from 'express-custom';

interface UserRequest extends Request {
  user: object;
}

export const loginEndpoint = new Endpoint({
  name: 'Login',
  description: 'Login to your account',
  path: '/login',
  method: 'POST',
  /**
   * Handler for the endpoint.
   * @param req The request.
   * @param res The response.
   */
  controller: (req, res) => {
    res.json({ user: (req as UserRequest).user });
  },
});
