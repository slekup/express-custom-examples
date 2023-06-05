import { RouterBuilder } from 'express-custom';

const userRouter = new RouterBuilder({
  name: 'User Endpoints',
  path: '/user',
});

export default userRouter;
